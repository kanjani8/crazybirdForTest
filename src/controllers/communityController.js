import Subject from "../models/subject";
import User from "../models/user";
import Posting from "../models/posting";
import Reporting from "../models/reporting";

export const community = async (req, res) => {
    const {id} = req.params; // 과목id
    const { keyword } = req.query;
    const subject = await Subject.findById(id);
    
    let postings = [];
    if (keyword) {
      postings = await Posting.find({
         $or : 
         [ 
           {title: {
        $regex: new RegExp(keyword, "i"),
      }}, {script: {
        $regex: new RegExp(keyword, "i"),
      }}], subject: id,
    }).sort({ createdAt: "desc"});
    } else {
      try{
        postings = await Posting.find({subject: id}).sort({ createdAt: "desc"});
      }catch(error){
        console.log(error);
      }
    }
    return res.render("community/list", { pageTitle: subject.name+"의 게시판", postings });
};
  
export const watchPosting = async(req, res) => {
    const {id, postingId} = req.params;
    try{
        const subject = await Subject.findById(id);
        const posting = await Posting.findById(postingId).populate("user");
        posting.meta.views+=1;
        posting.save();
        const recommend = req.session.user.recommendPost.includes(postingId);
        return res.render("community/watch", { pageTitle: `${subject.name}의 게시판`, posting, recommend});
    }catch(error){
        return res.render("404", {pageTitle:`게시물 보기 에러`});
    }
};
  
export const getUploadPosting = async(req, res) =>{
    const {id} = req.params;
    const subject = Subject.findById(id);
    if (!subject){
      return res.render("404", { pageTitle: "Subject not found." });
    }
    return res.render("community/upload", { pageTitle: `${subject.name}의 게시판`});
};
export const postUploadPosting = async(req, res) =>{
    const {id} = req.params;
    const {title, script} = req.body;
    const file =req.files['image'] ?req.files['image'][0]: null;
    const file2 = req.files['video'] ? req.files['video'][0] : null;
    const imageUrl = file ? file.path : null;
    const videoUrl = file2 ? file2.path : null;
    try{
      const user = await User.findById(req.session.user._id).populate("school");
      const newPosting = await Posting.create({title, imageUrl, videoUrl, script, 
          subject:id, user:user._id});
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
    return res.render("community/edit", { pageTitle: posting.subject.name, posting});
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
              pageTitle:`${posting.subject.name}의 게시판`,
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
  return res.render("community/report", { pageTitle: "게시글 신고하기"});
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