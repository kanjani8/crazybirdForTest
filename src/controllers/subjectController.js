import Subject from "../models/subject";
import School from "../models/school";
import User from "../models/user";
import Location from "../models/location";

export const search = async (req, res) => {
  const user = await User.findById(req.session.user._id).populate("likedSubjects");
  const school = user.school;
  const { keyword } = req.query;
  let subjects = [];
  const likedSubjects = user.likedSubjects;
  // subjects = await Subject.find({});
 //   console.log(subjects);
 //   for(let i = 0; i < subjects.length; i++){
  //    await Subject.findByIdAndUpdate(subjects[i]._id, {school} );
  //   } //이런 식으로 과목들에 학교를 일괄로 집어넣음.
  //  let locations = await Location.find({});
  //  for(let i = 0; i< locations.length; i++){
  //    await Location.findByIdAndUpdate(locations[i]._id, {school});
  //  } // 위치들에 학교 집어넣는 임시코드
  // const result = School.findByIdAndUpdate(school, {locations}, {new: true});
  //console.log(result);
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
  return res.render("search", { pageTitle: "Search", likedSubjects, subjects });
};

export const see =  async (req, res) => {
  const { id } = req.params;
  try{
  const subject = await Subject.findById(id);
  if (!subject) {
    return res.status(400).render("404", { pageTitle: "해당 과목을 찾을 수 없습니다" });
  }
  
  return res.render("seeSubject", { pageTitle: subject.name, subject});
  }catch(error){
    console.log(error);
    return res.status(400).render("404", { pageTitle: "과목 화면 에러발생", errorMessage: error._message });
  }
};

export const like = async(req, res) => {
  const {id} = req.params;
  try{
    const subject = await Subject.findById(id);
    const user = await User.findById(req.session.user._id);
    user.likedSubjects.push(subject._id);
    user.save();
  }catch(error){
    // 즐겨찾기 실패했다고 알림띄우기
    console.log(error);
  }
  return res.redirect(`/subject/search`);
};

export const dislike = async(req, res) => {
  const {id} = req.params;
  try{
    const subject = await Subject.findById(id);
    const user = await User.findById(req.session.user._id);
    user.likedSubjects.pull(subject._id);
    user.save();
  }catch(error){
    // 즐겨찾기 해제 실패했다고 알림띄우기
    console.log(error);
  }
  return res.redirect(`/subject/search`);
};