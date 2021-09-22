import User from "../models/user";
import bcrypt from "bcrypt";

export const getEnroll = (req, res) => res.render("enroll", {pageTitle:"enroll"});
export const postEnroll = async (req, res) => {
    console.log(req.body);
    const { name, email, username, password, password2} = req.body;
    const pageTitle = "Join";
    if(password !== password2){
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "비밀번호가 맞지 않습니다.",
        });
    }
    const exists = await User.exists({ $or: [{username}, {email}]  });
    if(exists){
        return res.status(400).render("join", {
            pageTitle,
            errorMessage:"아이디 혹은 이메일이 이미 사용중입니다."
        })
    }
    try{
        await User.create({
            name,
            email,
            username,
            password
        });
         return res.redirect("/login");
    } catch(error) {
        return res.status(400).render("join", {
            pageTitle: "Enroll error",
            errorMessage: error._message,
        });
    }
};

export const getLogin = (req, res) => res.render("login",{pageTitle:"login"});
export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).render("login", {
        pageTitle,
        errorMessage: "존재하지 않는 아이디입니다.",
      });
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(400).render("login", {
        pageTitle,
        errorMessage: "비밀번호가 잘못되었습니다",
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
};


export const startKakaoLogin = async(req, res) =>{
   
};
export const finishKakaoLogin = async(req, res) =>{

};

export const logout = (req, res) => res.send("user logoutPage!");
export const user = (req, res) => res.send("userPage!");
export const edit = (req, res) => res.send("user editPage!");
export const remove = (req, res) => res.send("user removePage!");


