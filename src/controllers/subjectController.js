import Test from "../models/test";
import Subject from "../models/subject";



export const search = async (req, res) => {
  const subjects = await Subject.find({});
  console.log(subjects);
  return res.render("search", { pageTitle: "Subject Search", subjects });
};


export const see =  async (req, res) => {
  const { id } = req.params;
  const subject = await Subject.findById(id);
  if (!subject) {
    return res.render("404", { pageTitle: "Subject not found." });
  }
  return res.render("seeSubject", { pageTitle: subject.name, subject });
};




export const list = (req, res) => res.send("test listPage!");
export const register = (req, res) => res.send("test registerPage!");
export const update = (req, res) => res.send("test UpdatePage!");

export const setting = (req, res) => res.send("subject settingPage!");
export const solve = (req, res) => res.send("subject solvePage!");
export const result = async (req, res) => {
  return res.send("subject solvePage!");
};
export const community = (req, res) => res.send("subject communityPage!");