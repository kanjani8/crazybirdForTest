import Subject from "../models/subject";
import Test from "../models/test";
import User from "../models/user";
import Score from "../models/score";

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

  const tests1 = await Test.find({subject: id, forWhen: "middle", $or: [{opened: true}, {user: req.session.user._id}]});
  const tests2 = await Test.find({subject: id, forWhen: "final", $or: [{opened: true}, {user: req.session.user._id}]});
  const tests3 = await Test.find({subject: id, forWhen: "extra", $or: [{opened: true}, {user: req.session.user._id}]});
  const length = [tests1.length, tests2.length, tests3.length];

  const testsMine1 = await Test.find({subject: id, forWhen: "middle", user: req.session.user._id});
  const testsMine2 = await Test.find({subject: id, forWhen: "final", user: req.session.user._id});
  const testsMine3 = await Test.find({subject: id, forWhen: "extra", user: req.session.user._id});
  const myLength = [testsMine1.length, testsMine2.length, testsMine3.length];
 
  res.render("tests/setTest", {pageTitle: "시험 설정", length, myLength});
};
export const solve = async(req, res) => {
  const {id} = req.params;
  const {forWhen, opened, length} = req.body;
  console.log(forWhen, opened, length);
  let tests;
  let randomTests = [];
  try{
    if(opened === "1"){
      tests = await Test.find({forWhen, subject:id,  $or: [{opened: true}, {user: req.session.user._id}]});

      //여기서 유저의 포인트 깎는 작업이 필요함.
      //선택한 문제 개수, 유저데이터
        let user = await User.findById(req.session.user._id);
        if((user.point- (5*length)) > 0){
          user.point= user.point - (5*length);
          user.save();
          req.session.user = user;
        } else {
          return res.send(`<script>alert("포인트가 부족합니다.");
            location.href='/subject/${id}';</script>`);
        }
        
      }
    else{
      tests = await Test.find({forWhen, subject:id, user: req.session.user._id});
    }

    let array = [];
    let i = 0;
    let isOverlaped = false;
    while(i < length){
      let num = Math.floor(Math.random() * (tests.length));
        for(let j = 0; j < i; j++){
          if(array[j] === num){
            isOverlaped = true;
          }
        }
        if(isOverlaped === true){
          isOverlaped = false;
        }else{
          array.push(num);
          i++;
        }
    }
    for(let i = 0; i < length; i++){
      randomTests.push(tests[array[i]]);
    }
    return res.render("tests/solveTest", {pageTitle: "문제 풀기", id, tests: randomTests}); // 여기서 문제푸는 페이지(+신고버튼) 펴서 보여줘야함 form에서는 다른 url로 이동하는 속성 추가
  }catch(error){
    console.log(error);
    return res.render("404", {pageTitle: "문제 페이지 에러", errorMessage: error._message}); 
  }
};


export const result = async (req, res) => {// form으로 받아와서 채점해서 보여주기.
  const {id:subjectId} = req.params
  const {id, answer} = req.body;
  let isCorrect = [];
  let myAnswer = [];
  let tests = [];
  let score = 0;
  for(let i = 0; i < id.length; i++){
    let test = await Test.findById(id[i]);
    const result = String(test.answer) === String(answer[i]);
    isCorrect.push(result);
    myAnswer.push(answer[i]);
    if(result){
      score ++;
    }
    test = {
      ... test._doc,
      ... {myAnswer: answer[i]},
      ... {result}
    };
    tests.push(test);
  }
  score = Math.floor(100 * score / id.length);
  await Score.create({
    score,
    subject: subjectId,
    user: req.session.user._id,
    tests,
    isCorrect,
    myAnswer
  });
  return res.render("tests/result", {pageTitle: "결과 확인", tests, score, id:subjectId });
};

export const reviewScore = async (req, res) => {
  const {scoreId} = req.params;
  const score = await Score.findById(scoreId).populate("tests");
  let tests = score.tests;
  console.log(score);
  let addedTests = [];
  for(let i = 0; i < tests.length; i++){
    const test = {
      ... tests[i]._doc,
      ... {result: score.isCorrect[i]},
      ... {myAnswer: score.myAnswer[i]}
    }
    addedTests.push(test);
  }
  console.log(addedTests);
  return res.render("tests/review", {pageTitle: "결과 다시보기", id: score.subject , score, tests: addedTests})
};

export const getReport = (req, res) => {
  return res.render("tests/report", {pageTitle: "문제 신고"});
}
export const postReport = async (req, res) => {
  const {id, testId} = req.params;
  const {report} = req.body;
  const test = await Test.findById(testId);
  if(!test){
    return res.render("404", { pageTitle: "해당 문제는 신고 혹은 삭제되었습니다" });
  }

  try{
    const reporter = req.session.user._id;
    const writer = await User.findById(test.user);
    if(String(reporter) === String(writer._id)){
      return res.send(`<script>alert("본인이 작성한 문제는 신고할 수 없습니다.");
            location.href='/subject/${id}';</script>`);
    }

    const already = await Reporting.find({
        reporter,
        reportedTest: test._id,
    });
    if (already){
        return res.send(`<script>alert("이미 신고하셨습니다.");
            location.href='/subject/${id}';</script>`);
    };
    test.reported += 1;
    test.save();

    const newReported = await Reporting.create({
      title: `Test obj '${test.question}' is reported`,
      script: report,
      reporter,
      reportedTest: test._id
    });
    console.log("신고된 문제:", newReported);
  }catch(error){
    console.log(error);
  }
  
  if(test.reported >= 10)
  {
    try {
      await Test.findByIdAndDelete(testId);
      writer.point -=50;
      writer.reported ++;
      if(writer.reported > 50){
        // writer의 이메일 차단 필요
        await User.findByIdAndDelete(writer._id);
      }else{
        writer.save();
      }
    }catch(error){
        return res.status(400).render("404", {pageTitle:"신고하기 에러", errorMessage:error._message});
    }
  }
  return res.redirect(`/subject/${id}/`);
}

