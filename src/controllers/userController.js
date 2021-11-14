import User from "../models/user";
import bcrypt from "bcrypt";
import passport from "passport";
const KakaoStrategy = require('passport-kakao').Strategy;

export const getEnroll = (req, res) => res.render("enroll", {pageTitle:"enroll"});
export const postEnroll = async (req, res) => {
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

// export const startKakaoLogin = async(req, res) =>{
//    await passport.use('kakao', new KakaoStrategy({
//        clientID: process.env.KAKAO_KEY,
//        callbackURL: process.env.REDIRECT_URL,
//    }, async(accessToken, refreshToken, profile, done) => {
//     console.log(profile);
//     console.log(accessToken);
//     console.log(refreshToken);
//    }));
//    passport.authenticate('kakao');
// };

// export const finishKakaoLogin = async(req, res) =>{
//     passport.authenticate('kakao', {
//         failureRedirect: '/',
//       }), (res, req) => {
//         res.redirect('/');
//         console.log("login success");
//       }
// };

export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/");
};



export const getEdit = (req, res) => {  
    return res.render("edit-profile", {pageTitle:"프로필 수정"});
};

export const postEdit = async(req, res) => {
    const {
        session: {
            user: {_id},
        },
        body: {name, email, username},
    } = req;
    await User.findByIdAndUpdate(_id, {name, email, username});
    
    return res.render("edit-profile");
};

export const user = (req, res) => res.send("userPage!");

