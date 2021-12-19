import Subject from "../models/subject";
import Test from "../models/test";
import User from "../models/user";

export const list = async (req, res) => {
    const { id } = req.params;
    try{
      const subject = await Subject.findById(id);
      const tests = await Test.find({subject: id, user: req.session.user._id}).populate("subject");
      return res.render("tests/testList", { pageTitle: subject.name, tests });
    }catch(error){
      return res.render("404", { pageTitle: "Tests not found.", errorMessage:error._message });
    }
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
    const {formType, opened, forWhen} = req.body;
    const user = await User.findById(req.session.user._id).populate("school");
   
    if(formType === "1"){ // 단답형일 경우
      const question = req.body.question[0];
      const answer = req.body.answer[0];
      try{
           const newTest1 = await Test.create({
          question, 
          answer,
          user:user._id,
          subject:id,
          opened,
          formType,
          forWhen
         });
         user.tests.push(newTest1);
        //opened가 true이면 user의 포인트를 + 50하기
        if(opened)
        {
          user.point += 50;
          req.session.user = user;
        }
        user.save();
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
        const newTest2 = await Test.create({
          question, 
          answer,
          user:user._id,
          subject:id,
          wrongAnswer1,
          wrongAnswer2,
          wrongAnswer3,
          opened,
          formType,
          forWhen
        });
        user.tests.push(newTest2);
        //opened가 true이면 user의 포인트를 + 50하기
        if(opened)
        {
          user.point += 50;
          req.session.user = user;
        }
        user.save();
        return res.redirect(`/subject/${id}/test/list`);
      }catch(error){
        console.log(error);
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
    if(!subject){
      return res.render("404", { pageTitle: "해당 과목을 찾을 수 없습니다." });
    }
    if(!test){
      return res.render("404", { pageTitle: "해당 문제를 찾을 수 없습니다" });
    }
    if(String(test.user._id) !== String(req.session.user._id)){
      return res.status(403).redirect(`/subject/${id}/test/list`);
    }
    return res.render("tests/editTest", { pageTitle: subject.name, subject, test});
};
  
export const postEditTest = async (req, res) => {
    const { id, testId } = req.params;
    const user = req.session.user;
    const test = await Test.findById(testId).populate("subject");
    const {question, answer, opened, forWhen} = req.body;
    if(!test){
      return res.render("404", { pageTitle: "해당 문제를 찾을 수 없습니다" });
    }
    if(String(test.user._id) !== String(req.session.user._id)){
      return res.status(403).redirect(`/subject/${id}/test/list`);
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
          const point = (opened==1 ? user.point+50 : user.point-50);
          const pointUpdatedUser = await User.findByIdAndUpdate(user._id, {
            point},
            {new: true}
            ).populate("school");
            req.session.user = pointUpdatedUser;
          }
          const updatedTest = await Test.findById(testId);
          return res.render("tests/editTest", { pageTitle: test.subject.name, subject: test.subject, test: updatedTest});
    }catch(error){
          return res.status(400).render("tests/editTest", {
            pageTitle: test.subject.name,
            subject: test.subject,
            test,
            errorMessage: error._message,
          });
  
    }
};
  
  
export const deleteTest = async (req, res) => {
    const { id, testId } = req.params;
    try{
      const user = await User.findById(req.session.user._id).populate("school");
      const test = await Test.findById(testId);
      const opened = test.opened;
      if(String(test.user._id) !== String(user._id)){
        return res.send(`<script>alert("타인의 시험문제는 삭제할 수 없습니다.");
            location.href='/subject/${id}/test/list';</script>`);
      }
      await Test.findByIdAndDelete(testId);
      user.tests.pull(testId);
      if(opened){
        user.point -=50;
        req.session.user = user;
      }
      user.save();
      return res.redirect(`/subject/${id}/test/list`);
    }catch(error){
      return res.status(400).render("404", {pageTitle:"시험문제 삭제 에러", errorMessage: error._message});
    }
};


export const setting = async(req, res) => {
  const { id } = req.params;
  let length = [0, 0, 0];
  const tests1 = await Test.find({subject: id, forWhen: "middle", $or: [{opened: true}, {user: req.session.user._id}]});
  length[0] = tests1.length;
  const tests2 = await Test.find({subject: id, forWhen: "final", $or: [{opened: true}, {user: req.session.user._id}]});
  length[1] = tests2.length;
  const tests3 = await Test.find({subject: id, forWhen: "extra", $or: [{opened: true}, {user: req.session.user._id}]});
  length[2] = tests3.length;

  let myLength = [0, 0, 0];
  const testsMine1 = await Test.find({subject: id, forWhen: "middle", user: req.session.user._id});
  myLength[0] = testsMine1.length;
  const testsMine2 = await Test.find({subject: id, forWhen: "final", user: req.session.user._id});
  myLength[1] = testsMine2.length;
  const testsMine3 = await Test.find({subject: id, forWhen: "extra", user: req.session.user._id});
  myLength[2] = testsMine3.length;
 
  res.render("tests/setTest", {pageTitle: "시험 설정", length, myLength});
};
export const solve = (req, res) => {

  res.render("tests/setTest"); // 여기서 문제푸는 페이지(+신고버튼) 펴서 보여줘야함 form에서는 다른 url로 이동하기
};
export const result = async (req, res) => {// form으로 받아와서 채점해서 보여주기.
  return res.send("subject solvePage!");
};
export const report = (req, res) => res.send("subject reportPage!");