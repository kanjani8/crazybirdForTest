import Test from "../models/test";

export const search = (req, res) => res.send("subject searchPage!");
export const see = (req, res) => res.send("subject seePage!");
export const community = (req, res) => res.send("subject communityPage!");
export const setting = (req, res) => res.send("subject settingPage!");
export const register = (req, res) => res.send("subject registerPage!");
export const test = (req, res) => {
  const tests = await Test.find({});
    return res.render("test", { pageTitle: "Test", tests });
  };