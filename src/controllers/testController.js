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
   
    if(formType === "1"){ // 단답형일 경우
      const question = req.body.question[0];
      const answer = req.body.answer[0];
      try{
           await Test.create({
          question, 
          answer,
          user:req.session.user._id,
          subject:id,
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
          ).populate("school");
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
          user:req.session.user._id,
          subject:id,
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
          ).populate("school");;
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
            ).populate("school");
            req.session.user = pointUpdatedUser;
          }
          const updatedTest = await Test.findById(testId);
          return res.render("tests/editTest", { pageTitle: subject.name, subject, test: updatedTest});
    }catch(error){
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
      const pointUpdatedUser = await User.findByIdAndUpdate(req.session.user._id, {point}, {new: true})
                                  .populate("school");
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