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
  const tests = await Test.find().populate('subject');
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
  return res.render("uploadTest", { pageTitle: subject.name, subject});
};

export const postUploadTest = async (req, res) => {
  const {question, answer, } = req.body;
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject){
    return res.render("404", { pageTitle: "Subject not found." });
  }

  try{
    await Test.create({
      userId:req.session.user.id,
      question, 
      answer,
      subjectId:id,
      subjectName:subject.name
    })
    return res.redirect("testList", { pageTitle: subject.name, subject});
  }catch(error){
    return res.status(400).render("upload", {
      pageTitle: "문제 업로드 에러",
      errorMessage: error._message,
    });
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