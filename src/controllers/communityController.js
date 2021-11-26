import Subject from "../models/subject";
import User from "../models/user";
import Posting from "../models/posting";
import School from "../models/school";


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
      }}, {professor: {
        $regex: new RegExp(keyword, "i"),
      }}], subjectId: id,
    }).sort({ createdAt: "desc"});
    } else {
      try{
        postings = await Posting.find({subjectId: id}).sort({ createdAt: "desc"});
      }catch(error){
        console.log(error);
      }
  
    }
    return res.render("community/list", { pageTitle: subject.name+"의 게시판", postings });
  };
  
  export const watchPosting = async(req, res) => {
    const {id, postingId} = req.params;
    const userId = req.session.user.id;
    const subject = await Subject.findById(id);
    if (!subject){
      return res.render("404", { pageTitle: "Subject not found." });
    }
    const posting = await Posting.findById(postingId);
    return res.render("community/watch", { pageTitle: `${subject.name}의 게시판`, posting});
  }
  
  export const getUploadPosting = async(req, res) =>{
    const {id} = req.params;
    const subject = Subject.findById(id);
    if (!subject){
      return res.render("404", { pageTitle: "Subject not found." });
    }
    return res.render("community/upload", { pageTitle: `${subject.name}의 게시판`, subject });
  }
  export const postUploadPosting = async(req, res) =>{
    const {id} = req.params;
    const subject = Subject.findById(id);
    const {title, script} = req.body;
    const file =req.files['image'] ?req.files['image'][0]: null;
    const file2 = req.files['video'] ? req.files['video'][0] : null;
    const imageUrl = file ? file.path : null;
    const videoUrl = file2 ? file2.path : null;
    if (!subject){
      return res.render("404", { pageTitle: "Subject not found." });
    }
    try{
      const createdPost = await Posting.create({title,imageUrl,videoUrl, script, subjectId:id, userId:req.session.user._id});
      console.log(createdPost);
  
      const point = req.session.user.point+5; // 글 쓸 경우 5점 플러스
      const plusUser = await User.findByIdAndUpdate(req.session.user._id, {point},
            {new: true}
          );
      req.session.user = plusUser;
      return res.redirect(`/subject/${id}/community`);
    }catch(error){
      console.log(error);
      return res.render("404", { pageTitle: "글 업로드 실패" });
    }
  }
  
  export const getEditPosting = async (req, res) => {
    const { id, postingId  } = req.params;
    const subject = await Subject.findById(id);
    const posting = await Posting.findById(postingId);
    if (!subject){
      return res.render("404", { pageTitle: "해당 과목을 찾을 수 없습니다." });
    }
    else if(!posting){
      return res.render("404", { pageTitle: "해당 게시물을 찾을 수 없습니다" });
    }
    return res.render("community/edit", { pageTitle: subject.name, subject, posting});
  };
  
  export const postEditPosting = async (req, res) => {
    const { id, postingId  } = req.params;
    const subject = await Subject.findById(id);
    const posting = await Posting.findById(postingId);
    const file = req.files['image']?req.files['image'][0]:null;
    const imageUrl = posting.imageUrl ? posting.imageUrl : null;
    const {title, script} = req.body;
    
    if (!subject){
      return res.render("404", { pageTitle: "해당 과목을 찾을 수 없습니다." });
    }
    else if(!posting){
      return res.render("404", { pageTitle: "해당 게시물을 찾을 수 없습니다" });
    }
      try {
          await Posting.findByIdAndUpdate(postingId, 
            {
              title,
              imageUrl: file ? file.path : imageUrl,
              script
            });
          const updatedPosting = await Posting.findById(postingId);
          return res.redirect(`/subject/${id}/community/${postingId}`);
          } catch(error){
            console.log(error);
            return res.status(400).render("community/edit", {
              pageTitle:`${subject.name}의 게시판`,
              subject,
              posting,
              errorMessage: error._message,
            });
    
      } 
  };
  
  export const deletePosting = async(req, res) =>{
    const { id, postingId } = req.params;
    try{
      await Posting.findByIdAndDelete(postingId);
      const point =  req.session.user.point-5;
      const pointUpdatedUser = await User.findByIdAndUpdate(req.session.user._id, {point}, {new: true});
      req.session.user = pointUpdatedUser;
      return res.redirect(`/subject/${id}/community`);
    }catch(error){
      return res.status(400).render("404", {pageTitle:"시험문제 삭제 에러", errorMessage: error._message});
    }
  }