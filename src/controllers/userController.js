import User from "../models/user";
import Posting from "../models/posting";
import School from "../models/school";
import Reporting from "../models/reporting";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
//import passport from "passport";
//const KakaoStrategy = require('passport-kakao').Strategy;

export const getEnroll = (req, res) => res.render("enroll", {pageTitle:"enroll"});

export const postEnroll = async (req, res) => {
    const { name, email, username, password, password2, schoolName} = req.body;
    const pageTitle = "회원가입";
    if(password !== password2){
        return res.status(400).render("enroll", {
            pageTitle,
            errorMessage: "비밀번호가 맞지 않습니다.",
        });
    }
    let school;
    if(schoolName)
        school = await School.findOne({name:schoolName});
    const idExists = await User.exists({username});
    const emailExists = await User.exists({email});
    if(idExists && emailExists){
        return res.status(400).render("enroll", {
            pageTitle,
            errorMessage:"아이디 " + username + "와(과) 이메일 " + email + "이 모두 사용중입니다.",
        });
    }
    else if(idExists){
        return res.status(400).render("enroll", {
            pageTitle,
            errorMessage:"아이디 " + username +  "가 사용중입니다.",
        });
    }
    else if(emailExists){
        return res.status(400).render("enroll", {
            pageTitle,
            errorMessage:"이메일 " + email + "이 사용중입니다.",
        });
    }

     
    try{
        if(school){
            await User.create({
                name,
                email,
                username,
                password,
                school: school._id
            });
        }
        else{
            await User.create({
                name,
                email,
                username,
                password,
            });
        }
        
         return res.redirect("/login");
    } catch(error) {
        console.log(error);
        return res.status(400).render("enroll", {
            pageTitle: "Enroll error",
            errorMessage: error._message,
        });
    }
};

export const getLogin = (req, res) => res.render("login",{pageTitle:"login"});
export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({ username }).populate("school");
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

export const getFindId = (req, res) => {
    return res.render("findId", {pageTitle:"아이디 찾기"});
};
export const postFindId = async(req, res) => {
    const {email} = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail', // 학교메일만 받을 경우 수정 필요?
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASSWORD,
        },
    });

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.render("findId", 
            {
                pageTitle:"아이디 찾기", 
                errorMessage:"해당 이메일을 사용하는 계정이 존재하지 않습니다"
            });
        }
        const mailOption = {
            from: `"씨부리(Cbird)" <${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Cbird 사이트 아이디 찾기",
            text: `당신의 아이디는 ${user.username}입니다.`,
          }
        const info = await transporter.sendMail(mailOption);
        console.log(info);
        return res.send(`<script>alert("아이디 정보가 해당 주소로 전송되었습니다.");
            location.href='/login';</script>`);
    }catch(error){
        console.log(error);
        return res.render("findId", {pageTitle:"findId", errorMessage: error._message});
    }
};

export const getFindPass = (req, res) => {
    return res.render("findPass", {pageTitle:"비밀번호 찾기"});
}
export const postFindPass = async (req, res) => {
    const {email, id} = req.body;
    try {
        let user = await User.findOne({email});
        let transporter = nodemailer.createTransport({
            service: 'gmail', // 학교메일만 받을 경우 수정 필요?
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.NODEMAILER_USER,
              pass: process.env.NODEMAILER_PASSWORD,
            },
        });
        if(user.username == id) {
            const newPW = Math.random().toString(36).slice(2) + "!";
            try {
                user.password = newPW;
                user.save();
                const mailOption = {
                    from: `"씨부리(Cbird)" <${process.env.NODEMAILER_USER}>`,
                    to: email,
                    subject: "Cbird 사이트 비밀번호 찾기",
                    text: `당신의 임시비밀번호는 ${newPW} 입니다.`,
                  }
                const info = await transporter.sendMail(mailOption);
                console.log(info);
                return res.send(`<script>alert("임시 비밀번호가 해당 주소로 전송되었습니다.");
                location.href='/login';</script>`);
            } catch (error) {
                console.log(error);
                return res.render("login", {pageTitle:"Login", errorMessage: error._message});
            }
        } else {
            return res.render("findPass", {pageTitle:"비밀번호 찾기", errorMessage: "아이디가 일치하지 않습니다."});
        }
    } catch (error) {
        return res.render("findPass", {pageTitle:"비밀번호 찾기", errorMessage: "해당 이메일을 사용하는 계정이 존재하지 않습니다."});
    }
    
    
}

export const getEdit = (req, res) => {  
    return res.render("users/edit-profile", {pageTitle:"프로필 수정"});
};
export const postEdit = async(req, res) => {
    const {
        session: {
            user: { _id, avatarUrl },
        },
        body: {name, email, username},
        file,
    } = req;

    let idExists = false;
    let emailExists = false;
    //email과 username(id)만 다른 사람과 안겹치게 처리하자. 이름은 겹칠수도 있으니 ㅇㅇ..
    if(username != req.session.user.username)
        idExists = await User.exists({username});
    if(email != req.session.user.email)
        emailExists = await User.exists({email});
    if(idExists && emailExists){
        return res.status(400).render("users/edit-profile", {
            pageTitle:"프로필 업데이트 에러",
            errorMessage:"아이디 " + username + "와(과) 이메일 " + email + "이 모두 사용중입니다.",
        });
    }
    else if(idExists){
        return res.status(400).render("users/edit-profile", {
            pageTitle:"프로필 업데이트 에러",
            errorMessage:"아이디 " + username +  "가 사용중입니다.",
        });
    }
    else if(emailExists){
        return res.status(400).render("users/edit-profile", {
            pageTitle:"프로필 업데이트 에러",
            errorMessage:"이메일 " + email + "이 사용중입니다.",
        });
    }


    try{
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                avatarUrl: file ? file.path : avatarUrl,
                name,
                email,
                username
            },
                {new: true}
        );
        req.session.user = updatedUser;
        res.locals.loggedInUser = req.session.user;
        return res.render("users/edit-profile");
    }catch(error){
        return res.status(400).render("404", {pageTitle:"프로필 업데이트 에러", errorMessage:error._message,});   
    }
};

export const getChangePassword = (req, res) => {
    return res.render("users/change-password", {pageTitle: "비밀번호 변경"});
}
export const postChangePassword = async(req, res) => {

    const {
        session: {
            user: {_id},
        },
        body: { oldPassword, newPassword, newPassword2 },
    } = req;
    const user = await User.findById(_id);
    const ok = await bcrypt.compare(oldPassword, user.password);
    //기존 비밀번호 입력이 올바르게 됐는지 확인
    if (!ok)    {
        return res.status(400).render("users/change-password",{
            pageTitle: "Change Password",
            errorMessage: "기존 비밀번호 입력이 잘못되었습니다.",
          });
    }
    //새로운 비밀번호 확인이 잘못되었을때
    if (newPassword !== newPassword2) {
        return res.status(400).render("users/change-password", {
          pageTitle: "Change Password",
          errorMessage: "새 비밀번호 확인이 잘못되었습니다.",
        });
      }
    user.password = newPassword;
    await user.save();
    return res.redirect("/user/logout");
}


export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/");
};

export const leave = async(req, res) => {
    try{
        await Posting.deleteMany({"user":req.session.user._id});
        await User.findByIdAndDelete(req.session.user._id);
        req.session.destroy();
        return res.redirect("/");
    }catch(error){
        console.log(error);
        return res.status(400).render("404", {pageTitle:"회원탈퇴 에러", errorMessage:error._message});
    }
};

export const user = async(req, res) => {  // 작성글 목록을 나타내는 프로필
    const {userId:id} = req.params;
    const user = await User.findById(id).populate("postings");
    if(!user){
        return res.status(404).render("404", {pageTitle:"해당 사용자를 찾을 수 없음"});
    }
    return res.render("users/profile", {pageTitle:`${user.name}`, user});
};

export const getUserReport = (req,res) => {
    const {userId} = req.params;
    if(String(userId) === String(req.session.user._id)){
        return res.send(`<script>alert("본인을 신고할 수 없습니다.");
            location.href='/user/${userId}';</script>`);
    }
    return res.render("users/report", { pageTitle: "유저 신고하기"});
}

export const postUserReport = async(req,res) => {
    const {userId:id} = req.params;
    const {report} = req.body;
    const user = await User.findById(id);
    const reporter = req.session.user._id;
    if(!user){
        return res.status(404).render("404", {pageTitle:"해당 사용자를 찾을 수 없음"});
    }
    if(String(user._id) === String(reporter)){
        return res.status(403).redirect(`/user/${id}`);
        return res.send(`<script>alert("본인을 신고할 수 없습니다.");
            location.href='/user/${userId}';</script>`);
    }
   
    try{
        const already = await Reporting.find({
            reporter,
            reportedUser: user._id,
        });
        if (already){
            //이미 신고하셨습니다 알림
            console.log("already reported");
            return res.redirect(`/`);
        }
        user.reported+=1;
        user.save();
        const newReported = await Reporting.create({
          title: `User '${user.username}'is reported`,
          script: report,
          reporter,
          reportedUser: user._id,
        });
        console.log(newReported);
      }catch(error){
        console.log(error);
      }

    if(user.reported >= 50)
    {
        try{
            await Posting.deleteMany({"user":id});
            await User.findByIdAndDelete(id);
            console.log(`username ${user.username} is 50times reported and deleted`);
        }catch(error){
            return res.status(400).render("404", {pageTitle:"신고하기 에러", errorMessage:error._message});
        } 
    }
    return res.redirect(`/`);
}