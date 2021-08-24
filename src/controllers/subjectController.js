import Test from "../models/test";
import Subject from "../models/subject";

export const search = async (req, res) => {
  const subjects = await Subject.find({});
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
export const solve = (req, res) => res.send("subject solvePage!");
export const list = (req, res) => res.send("subject listPage!");
export const community = (req, res) => res.send("subject communityPage!");
export const setting = (req, res) => res.send("subject settingPage!");
export const register = (req, res) => res.send("subject registerPage!");
export const test = async (req, res) => {
  const tests = await Test.find({});
    return res.render("test", { pageTitle: "Test", tests });
  };