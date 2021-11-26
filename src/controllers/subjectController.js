import Subject from "../models/subject";
import School from "../models/school";

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

