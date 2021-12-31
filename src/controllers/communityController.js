import Subject from "../models/subject";
import User from "../models/user";
import Posting from "../models/posting";
import Reporting from "../models/reporting";

export const community = async (req, res) => {
    const {id} = req.params; // 과목id
    const { keyword } = req.query;
    const { page } = req.query; // (1)
    const subject = await Subject.findById(id);
    let totalPost;
    let postings = [];
    if (keyword) {
      try {
        totalPost = await Posting.find({
          $or : 
          [ 
            {title: {
         $regex: new RegExp(keyword, "i"),
       }}, {script: {
         $regex: new RegExp(keyword, "i"),
       }}], subject: id,
     }).sort({ createdAt: "desc"}).countDocuments({});
     let {
       startPage,
       endPage,
       hidePost,
       maxPost,
       totalPage,
       currentPage
     } = paging(page, totalPost);
     console.log(totalPost, startPage,
       endPage,
       hidePost,
       maxPost,
       totalPage,
       currentPage);
     postings = await Posting.find({
       $or : 
       [ 
         {title: {
      $regex: new RegExp(keyword, "i"),
    }}, {script: {
      $regex: new RegExp(keyword, "i"),
    }}], subject: id,
  }).sort({ createdAt: "desc"})
     .skip(hidePost)
     .limit(maxPost);
     return res.render("community/list", { pageTitle: subject.name + "게시판", subject, postings,
       currentPage,
       startPage,
       endPage,
       maxPost,
       totalPage });
      } catch (error){
        console.log(error);
        return res.render("404", {pageTitle:`게시판 에러`,errorMessage:error._message});
      }
      
    } else {
      try{      
        totalPost = await Posting.countDocuments({subject: id});     
        let {
          startPage,
          endPage,
          hidePost,
          maxPost,
          totalPage,
          currentPage
        } = paging(page, totalPost);
        postings = await Posting.find({subject: id})
        .sort({ createdAt: "desc"})
        .skip(hidePost)
        .limit(maxPost);
        return res.render("community/list", { pageTitle: subject.name + "게시판", subject, postings,
          currentPage,
          startPage,
          endPage,
          maxPost,
          totalPage });
      }catch(error){
        console.log(error);
        return res.render("404", {pageTitle:`게시판 에러`,errorMessage:error._message});
      }
    }
    
};

const paging = (page, totalPost) => {
  const maxPost = 10; 
  const maxPage = 10; 
  let currentPage = page ? parseInt(page) : 1;
  let hidePost = currentPage === 1 ? 0 : (page - 1) * maxPost;
  let totalPage = totalPost==0 ? 1:Math.ceil(totalPost / maxPost);
  
  if (currentPage > totalPage) { 
    currentPage = totalPage;
  }

  let startPage = Math.floor(((currentPage - 1) / maxPage)) * maxPage + 1;
  let endPage = startPage + maxPage - 1;

  if (endPage > totalPage) { 
    endPage = totalPage;
  }
  return { startPage, endPage, hidePost, maxPost, totalPage, currentPage };
};

export default paging;
  
export const watchPosting = async (req, res) => {
    const {id, postingId} = req.params;
    try{
        const subject = await Subject.findById(id);
        const posting = await Posting.findById(postingId).populate("user");
        const time = posting.createdAt;
        const hours = (time.getHours() > 9) ? time.getHours(): `0${time.getHours()}`;
        const minutes = (time.getMinutes() > 9) ? time.getMinutes(): `0${time.getMinutes()}`;
        const createdAt = `${time.getMonth()+ 1}월${time.getDate()}일 ${hours}:${minutes}`;
        console.log(createdAt);
        const recommend = req.session.user.recommendPost.includes(postingId);
        // await fetch(`http://localhost:4000/api/subject/${id}/community/${postingId}/view`, {
        //  method: "POST",
        // });
        return res.render("community/watch", { pageTitle: `${subject.name} 게시판`, subject, posting, createdAt, recommend});
    }catch(error){
        console.log(error._message);
        return res.render("404", {pageTitle:`게시물 보기 에러`,errorMessage:error._message});
    }
};
  
export const getUploadPosting = async(req, res) =>{
    const {id} = req.params;
    const subject = await Subject.findById(id);
    if (!subject){
      return res.render("404", { pageTitle: "Subject not found." });
    }
    return res.render("community/upload", { pageTitle: `${subject.name} 게시판`, subject});
};
export const postUploadPosting = async(req, res) =>{
    const {id} = req.params;
    const {title, script} = req.body;
    let images = [];
    let videos = [];
    try{
      for(let i = 0; i < req.files.length; i++){
        if(req.files[i].mimetype.match(/image.*?$/gi)){
          const image = req.files[i].path;
          images.push(image);
        } else {
          const video = req.files[i].path;
          videos.push(video);
        }
      }
      const user = await User.findById(req.session.user._id).populate("school");
      const newPosting = await Posting.create({
          title,
          videos,
          images,
          script, 
          subject:id,
          user:user._id});
      console.log(newPosting);
      user.postings.push(newPosting._id);
      user.point +=5;
      req.session.user = user;
      user.save();
      return res.redirect(`/subject/${id}/community`);
    }catch(error){
      console.log(error);
      return res.render("404", { pageTitle: "글 업로드 실패" });
    }
};
  
export const getEditPosting = async (req, res) => {
    const { id, postingId  } = req.params;
    const posting = await Posting.findById(postingId).populate("subject");
    if(!posting){
      return res.render("404", { pageTitle: "해당 게시물을 찾을 수 없습니다" });
    }
    if (String(posting.user._id) !== String(req.session.user._id)){
      return res.status(403).redirect(`/subject/${id}/community`);
    }
    return res.render("community/edit", { pageTitle: posting.subject.name, subject: posting.subject, posting});
};
  
export const postEditPosting = async (req, res) => {
    const {id, postingId} = req.params;
    const {title, script} = req.body;
    const posting = await Posting.findById(postingId).populate("subject");
    const file = req.files['image']?req.files['image'][0]:null;
    const imageUrl = posting.imageUrl ? posting.imageUrl : null;
    
   if(!posting){
      return res.render("404", { pageTitle: "해당 게시물을 찾을 수 없습니다" });
    }
   if (String(posting.user._id) !== String(req.session.user._id)){
      return res.status(403).redirect(`/subject/${id}/community`);
    }
      try {
          await Posting.findByIdAndUpdate(postingId, 
            {
              title,
              imageUrl: file ? file.path : imageUrl,
              script
            });
          return res.redirect(`/subject/${id}/community/${postingId}`);
          } catch(error){
            console.log(error);
            return res.status(400).render("community/edit", {
              pageTitle:`${posting.subject.name} 게시판`,
              subject:  posting.subject,
              posting,
              errorMessage: error._message,
            });
    
      } 
};
  
export const deletePosting = async(req, res) =>{
    const { id, postingId } = req.params;
    try{
      const user = await User.findById(req.session.user._id).populate("school");
      const posting = await Posting.findById(postingId);
      if(!posting){
        return res.render("404", { pageTitle: "해당 게시물을 찾을 수 없습니다" });
      }
      if (String(posting.user._id) !== String(user._id)){
        return res.status(403).redirect(`/subject/${id}/community`);
      }
      await Posting.findByIdAndDelete(postingId);
      user.postings.pull(postingId);
      user.point -=5;
      req.session.user = user;
      user.save();
      return res.redirect(`/subject/${id}/community`);
    }catch(error){
      console.log(error);
      return res.status(400).render("404", {pageTitle:"시험문제 삭제 에러", errorMessage: error._message});
    }
};

export const getReportPosting = (req, res) => {
  return res.render("community/report", { pageTitle: "게시글 신고"});
};

export const postReportPosting = async (req, res) => {
  const {id, postingId} = req.params;
  const {report} = req.body;
  const posting = await Posting.findById(postingId);
  if(!posting){
    return res.render("404", { pageTitle: "해당 게시물을 찾을 수 없습니다" });
  }

  try{
    const reporter = req.session.user._id;
    const user = await User.findById(posting.user);
    if(String(reporter) === String(user._id)){
      return res.send(`<script>alert("본인의 글은 신고할 수 없습니다.");
            location.href='/subject/${id}/community';</script>`);
    }

    const already = await Reporting.find({
        reporter,
        reportedPosting: posting._id,
    });
    if (already){
        return res.send(`<script>alert("이미 신고하셨습니다.");
            location.href='/subject/${id}/community';</script>`);
    };
    posting.meta.reported += 1;
    posting.save();
    const newReported = await Reporting.create({
      title: `Posting '${posting.title}'is reported`,
      script: report,
      reporter,
      reportedPosting: posting._id
    });
    console.log("신고된 포스팅:", newReported);
  }catch(error){
    console.log(error);
  }
  
  if(posting.meta.reported >= 50)
  {
    try {
      await Posting.findByIdAndDelete(postingId);
      user.postings.pull(postingId);
      user.point -=5;
      user.save();
    }catch(error){
        return res.status(400).render("404", {pageTitle:"신고하기 에러", errorMessage:error._message});
    }
  }
  return res.redirect(`/subject/${id}/community`);
};

export const getRecommend = async (req, res) => {
  const {id, postingId} = req.params;
  const user = await User.findById(req.session.user._id).populate("school");
  const posting = await Posting.findById(postingId);
  if(user.recommendPost){
    if(user.recommendPost.includes(postingId)){
      posting.meta.rating-=1;
      posting.save();
      user.recommendPost.pull(postingId);
      user.save();
      req.session.user = user;
      res.locals.loggedInUser = req.session.user;
      return res.redirect(`/subject/${id}/community/${postingId}`);
    }
  }
  posting.meta.rating+=1;
  posting.save();
  user.recommendPost.push(postingId);
  user.save();
  console.log("테스트: ",user.recommendPost);
  req.session.user = user;
  res.locals.loggedInUser = req.session.user;
  return res.redirect(`/subject/${id}/community/${postingId}`);
}
export const registerView = async (req,res) => {
  console.log("들어옴");
  const { postingId } = req.params;
  const posting = await Posting.findById(postingId);
  if (!posting) {
    return res.status(404);
  }
  posting.meta.views = posting.meta.views + 1;
  await posting.save();
  return res.status(200);
}