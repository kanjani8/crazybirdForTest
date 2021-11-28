import Subject from "../models/subject";
import School from "../models/school";
import User from "../models/user";

export const search = async (req, res) => {
  const user = await User.findById(req.session.user._id).populate("likedSubjects");
  const school = user.school._id;

  const { keyword } = req.query;
  let subjects = [];
  //subjects = await Subject.find({});
  //for(let i = 0; i < subjects.length; i++){
  //  await Subject.findByIdAndUpdate(subjects[i]._id, {school:school._id} );
  // } //이런 식으로 과목들에 학교를 일괄로 집어넣음.
  if (keyword) {
    subjects = await Subject.find({
       $or : 
       [ 
         {name: {
      $regex: new RegExp(keyword, "i"),
    }}, {professor: {
      $regex: new RegExp(keyword, "i"),
    }}], $or: [{school}, {school: { $exists: false }}]
  }).populate("school");
  } else {
    try{
      subjects = await Subject.find({$or: [{school}, {school: { $exists: false }}]}).populate("school"); //$or로 학교+미소속으로 뜨게 수정필요
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

export const like = async(req, res) => {
  const {id} = req.params;
  
};

export const dislike = async(req, res) => {
  const {id} = req.params;

};