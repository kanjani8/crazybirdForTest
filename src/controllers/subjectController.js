import Subject from "../models/subject";
import Test from "../models/test";
import User from "../models/user";
import Posting from "../models/posting";
import School from "../models/school";
import { session } from "passport";

export const search = async (req, res) => {
  const { keyword } = req.query;
  const schoolName = req.session.user.schoolName;
  let subjects = [];
  if (keyword) {
    subjects = await Subject.find({
       $or : 
       [ 
         {name: {
      $regex: new RegExp(keyword, "i"),
    }}, {professor: {
      $regex: new RegExp(keyword, "i"),
    }}], schoolName,
  });
  } else {
    try{
      subjects = await Subject.find({schoolName});
    }catch(error){
      console.log(error);
    }

  }
 
  return res.render("search", { pageTitle: "Search", subjects });
};

export const see =  async (req, res) => {
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject) {
    return res.render("404", { pageTitle: "Subject not found." });
  }
  return res.render("seeSubject", { pageTitle: subject.name, subject });
};

export const list = async (req, res) => {
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject){
    return res.render("404", { pageTitle: "Subject not found." });
  }
  const tests = await Test.find({subjectId: id, userId: req.session.user._id});
  if(!tests){
    return res.render("404", { pageTitle: "Test not found." });
  }

  return res.render("tests/testList", { pageTitle: subject.name, subject, tests });
};




export const getUploadTest = async (req, res) => {
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject){
    return res.render("404", { pageTitle: "Subject not found." });
  }
  return res.render("tests/uploadTest", { pageTitle: subject.name});
};

export const postUploadTest = async (req, res) => {
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject){
    return res.status(400).render("404", { pageTitle: "해당 과목을 찾을 수 없습니다" });
  }
  const {formType, opened, forWhen} = req.body;
 
  if(formType === "1"){ // 단답형일 경우
    const question = req.body.question[0];
    const answer = req.body.answer[0];
    try{
         await Test.create({
        question, 
        answer,
        userId:req.session.user._id,
        subjectId:id,
        subjectName:subject.name,
        opened,
        formType,
        forWhen
       });
      //opened가 true이면 user의 포인트를 + 50하기
      const point = req.session.user.point+50;
      if(opened == true)
      {
        const plusUser = await User.findByIdAndUpdate(req.session.user._id, {
          point},
          {new: true}
        );
        req.session.user = plusUser;
      }
      return res.redirect(`/subject/${id}/test/list`);
    }catch(error){
      return res.status(400).render("404", {
        pageTitle: "문제 업로드 에러",
        errorMessage: error._message,
      });
    }
  }    
  else{// 객관식일 경우
    const question = req.body.question[1];
    const answer = req.body.answer[1];
    const {wrongAnswer1, wrongAnswer2, wrongAnswer3} = req.body;
    try{
      await Test.create({
        question, 
        answer,
        userId:req.session.user._id,
        subjectId:id,
        subjectName:subject.name,
        wrongAnswer1,
        wrongAnswer2,
        wrongAnswer3,
        opened,
        formType,
        forWhen
      });
      //opened가 true이면 user의 포인트를 + 50하기
      const point = req.session.user.point+50;
      if(opened == true)
      {
        const plusUser = await User.findByIdAndUpdate(req.session.user._id, {
          point},
          {new: true}
        );
        req.session.user = plusUser;
      }
      
      return res.redirect(`/subject/${id}/test/list`);
    }catch(error){
      return res.status(400).render("404", {
        pageTitle: "문제 업로드 에러",
        errorMessage: error._message,
      });
    }
    
  }
};


export const getEditTest = async (req, res) => {
  const { id, testId  } = req.params;
  const subject = await Subject.findById(id);
  const test = await Test.findById(testId);
  if (!subject){
    return res.render("404", { pageTitle: "해당 과목을 찾을 수 없습니다." });
  }
  else if(!test){
    return res.render("404", { pageTitle: "해당 문제를 찾을 수 없습니다" });
  }
  return res.render("tests/editTest", { pageTitle: subject.name, subject, test});
};


export const postEditTest = async (req, res) => {
  const { id, testId } = req.params;
  const subject = await Subject.findById(id);
  const test = await Test.findById(testId);
  const {question, answer, opened, forWhen} = req.body;
  
  if (!subject){
    return res.render("404", { pageTitle: "해당 과목을 찾을 수 없습니다." });
  }
  else if(!test){
    return res.render("404", { pageTitle: "해당 문제를 찾을 수 없습니다" });
  }

  try{
      // 문제 형식에 따라
      if(test.formType === "1"){ //문제가 단답형일 경우
        await Test.findByIdAndUpdate(testId, {
          question,
          answer,
          opened,
          forWhen,
        });
      }
      else{ // 문제가 객관식인 경우
        const {wrongAnswer1, wrongAnswer2, wrongAnswer3,} = req.body;
        await Test.findByIdAndUpdate(testId, {
          question,
          answer,
          wrongAnswer1,
          wrongAnswer2,
          wrongAnswer3,
          opened,
          forWhen,
        });
      }

      //opened값이 바뀌었으면  user의 포인트를 +- 50하기
      if(test.opened != opened) // 오픈 여부가 바뀌었음
      { 
        const point = (opened==1 ? req.session.user.point+50 : req.session.user.point-50);
        const pointUpdatedUser = await User.findByIdAndUpdate(req.session.user._id, {
          point},
          {new: true}
          );
          req.session.user = pointUpdatedUser;
        }
        const updatedTest = await Test.findById(testId);
        return res.render("tests/editTest", { pageTitle: subject.name, subject, test: updatedTest});
  }catch(error){
        console.log(error);
        return res.status(400).render("tests/editTest", {
          pageTitle: subject.name,
          subject,
          test,
          errorMessage: error._message,
        });

  }
};



export const deleteTest = async (req, res) => {
  const { id, testId } = req.params;
  try{
    await Test.findByIdAndDelete(testId);

    const point =  req.session.user.point-50;
    const pointUpdatedUser = await User.findByIdAndUpdate(req.session.user._id, {point}, {new: true});
    req.session.user = pointUpdatedUser;
    return res.redirect(`/subject/${id}/test/list`);
  }catch(error){
    return res.status(400).render("404", {pageTitle:"시험문제 삭제 에러", errorMessage: error._message});
  }
};

export const setting = (req, res) => res.send("subject settingPage!");
export const solve = (req, res) => res.send("subject solvePage!");
export const result = async (req, res) => {
  return res.send("subject solvePage!");
};



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
  });
  } else {
    try{
      postings = await Posting.find({subjectId: id});
    }catch(error){
      console.log(error);
    }

  }
  return res.render("community/list", { pageTitle: subject.name+"의 게시판", postings });
};

export const watchPosting = async(req, res) => {
  const {id, postingId} = req.params;
  const userId = req.session.user.id;
  console.log(userId);
  const subject = await Subject.findById(id);
  if (!subject){
    return res.render("404", { pageTitle: "Subject not found." });
  }
  const posting = await Posting.findById(postingId);
  console.log(posting);
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
  const file = req.file;
  const imageUrl = file.path;
  if (!subject){
    return res.render("404", { pageTitle: "Subject not found." });
  }
  try{
    const createdPost = await Posting.create({title,imageUrl, script, subjectId:id, userId:req.session.user._id});
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
  const {title, script} = req.body;
  
  if (!subject){
    return res.render("404", { pageTitle: "해당 과목을 찾을 수 없습니다." });
  }
  else if(!posting){
    return res.render("404", { pageTitle: "해당 게시물을 찾을 수 없습니다" });
  }

  try{
        await Posting.findByIdAndUpdate(postingId, {title, script});
        const updatedPosting = await Posting.findById(postingId);
        return res.render("community/watch", { 
          pageTitle: `${subject.name}의 게시판`,
          subject, posting: updatedPosting});
  }catch(error){
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