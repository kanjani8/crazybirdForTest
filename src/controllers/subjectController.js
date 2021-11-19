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
  const {formType, opened, forWhen} = req.body;
 
  if(formType === "1"){ // 단답형일 경우
    const question = req.body.question[0];
    const answer = req.body.answer[0];
    try{
        const testCreated = await Test.create({
        question, 
        answer,
        userId:req.session.user._id,
        subjectId:id,
        subjectName:subject.name,
        opened,
        formType,
        forWhen
       });
       console.log(testCreated);
      //opened가 true이면 user의 포인트를 + 50하기
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
  return res.render("editTest", { pageTitle: subject.name, subject, test});
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
        const testUpdating = await Test.findByIdAndUpdate(testId, {
          question,
          answer,
          opened,
          forWhen,
        });
        console.log("updating test", testUpdating);
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
    const updatedTest = await Test.findById(testId);
    return res.render("editTest", { pageTitle: subject.name, subject, test: updatedTest});
    //opened값이 바뀌었으면  user의 포인트를 +- 50하기
  }catch(error){
    console.log(error);
    return res.status(400).render("editTest", {
      pageTitle: subject.name,
      subject,
      test,
      errorMessage: error._message,
    });

  }
};



export const deleteTest = async (req, res) => {
  const { id, testId } = req.params;
  await Test.findByIdAndDelete(testId);
  return res.redirect(`/subject/${id}/test/list`);
};

export const setting = (req, res) => res.send("subject settingPage!");
export const solve = (req, res) => res.send("subject solvePage!");
export const result = async (req, res) => {
  return res.send("subject solvePage!");
};
export const community = (req, res) => res.send("subject communityPage!");