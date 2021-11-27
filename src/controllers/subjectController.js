import Subject from "../models/subject";
import School from "../models/school";

export const search = async (req, res) => {
  const school = req.session.user.school._id;
  console.log(school);
   //subjects = await Subject.find({});
      // for(let i = 0; i < subjects.length; i++){
      //   await Subject.findByIdAndUpdate(subjects[i]._id, {school:school._id} );
      // } //이런 식으로 과목들에 학교를 일괄로 집어넣음.
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
    }}], school,
  }).populate("school");
  } else {
    try{
      subjects = await Subject.find({school}).populate("school"); //$or로 학교+미소속으로 뜨게 수정필요
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


// 나중에 과목 추가/삭제(only미소속) 구현하는게 좋을듯
// export const getAddSubject = (req, res) => res.render("home", {pageTitle: "main"});
// export const postAddSubject = (req, res) => res.render("home", {pageTitle: "main"});