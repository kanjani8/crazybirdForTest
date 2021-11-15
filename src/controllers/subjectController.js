import Subject from "../models/subject";
import Test from "../models/test";

export const search = async (req, res) => {
  const { keyword } = req.query;
  let subjects = [];
  if (keyword) {
    subjects = await Subject.find({
       $or : 
       [ 
         {name: {
      $regex: new RegExp(keyword, "i"),
    }}, {professor: {
      $regex: new RegExp(keyword, "i"),
    }}]});
  } else {
    subjects = await Subject.find({});
    console.log(subjects);
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

  return res.render("testList", { pageTitle: subject.name, subject, tests });
};




export const getUploadTest = async (req, res) => {
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject){
    return res.render("404", { pageTitle: "Subject not found." });
  }
  return res.render("uploadTest", { pageTitle: subject.name});
};

export const postUploadTest = async (req, res) => {
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject){
    return res.render("404", { pageTitle: "Subject not found." });
  }
  const {formType} = req.body;

  // 객관식일 경우
  if(formType === 2){ // 객관식일 경우
    const question = req.body.question[1];
    const answer = req.body.answer[1];
    const {wrongAnswer1, wrongAnswer2, wrongAnswer3} = req.body;
    try{
      const createdTest = await Test.create({
        question, 
        answer,
        userId:req.session.user._id,
        subjectId:id,
        subjectName:subject.name,
        wrongAnswer1,
        wrongAnswer2,
        wrongAnswer3
      });
    return res.redirect(`/subject/${id}/test/list`);
    }catch(error){
      return res.status(400).render("404", {
        pageTitle: "문제 업로드 에러",
        errorMessage: error._message,
      });
    }
  }
  else{// 단답형일 경우
    const question = req.body.question[0];
    const answer = req.body.answer[0];
    try{
      const createdTest = await Test.create({
        question, 
        answer,
        userId:req.session.user._id,
        subjectId:id,
        subjectName:subject.name
      });
      return res.redirect(`/subject/${id}/test/list`);
    }catch(error){
      return res.status(400).render("404", {
        pageTitle: "문제 업로드 에러",
            errorMessage: error._message,
        });
      }
   }    

};


export const getEditTest = (req, res) => res.send("test UpdatePage!");
export const postEditTest = (req, res) => res.send("test UpdatePage!");

export const deleteTest = (req, res) => res.send("test deletePage!");

export const setting = (req, res) => res.send("subject settingPage!");
export const solve = (req, res) => res.send("subject solvePage!");
export const result = async (req, res) => {
  return res.send("subject solvePage!");
};
export const community = (req, res) => res.send("subject communityPage!");