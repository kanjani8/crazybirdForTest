import User from "../models/user";
import Event from "../models/event";
import Posting from "../models/posting";
import School from "../models/school";
import Reporting from "../models/reporting";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import fetch from "node-fetch";

export const getEnroll = (req, res) => res.render("enroll", {pageTitle:"회원가입 페이지"});

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
    if(user.block){
        return res.send(`<script>alert("신고를 받아 차단된 계졍입니다.");
                location.href='/login';</script>`);
    }
    req.session.loggedIn = true;
    req.session.user = user;
    if(!user.emailCertificated){
        return res.redirect("/user/certificate-email");
    }else{
        return res.redirect("/");
    }
};
export const getEmailCertificate = async(req, res) =>{
    if(req.session.user.emailCertificated){
        return redirect("/") // +이미 email certificate가 되었습니다 알림
    }
    const code = Math.random().toString(9).slice(3, 7);
    req.session.emailCode = code;
    //메일로 유저 메일한테 보내주기
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
        const mailOption = {
            from: `"씨부리(Cbird)" <${process.env.NODEMAILER_USER}>`,
            to: req.session.user.email,
            subject: "Cbird 사이트 이메일 인증 요청",
            text: `이메일 인증 코드는 ${code}입니다.`,
          }
        const info = await transporter.sendMail(mailOption);
        console.log(info);
        return res.render("users/certificate-email", {pageTitle: "이메일 인증 페이지"}); 
    }catch(error){
        console.log("메일인증 코드 전송 에러")
        return res.status(400).render("404", {pageTitle:"메일 인증코드 전송에러", errorMessage:error._message});  
    }
}
export const postEmailCertificate = async(req, res) =>{
    const {code} = req.body;
    const user = req.session.user;
    if(req.session.emailCode === code){
        try{
            const updatedUser = await User.findByIdAndUpdate(
                user._id, 
                {emailCertificated: true}, 
                {new: true}
                ).populate("school");
            console.log("유저 이메일 확인 완료: ", updatedUser)
            req.session.user = updatedUser;
            res.locals.loggedInUser = req.session.user;
            return res.redirect("/");
        }catch(error){
            console.log("이메일 인증 에러", error)
            return res.status(400).render("404", {
                pageTitle: "이메일 인증 에러",
                errorMessage: error._message,
              });
        }
    }
    else{
        return res.status(400).render("users/certificate-email", {
            pageTitle : "인증 에러" ,
            errorMessage: "코드가 일치하지 않습니다",
          });
    }

}

export const startKakaoLogin = async(req, res) =>{
    const baseLink = "https://kauth.kakao.com/oauth/authorize";
    const config = {
        response_type: "code",
        client_id: process.env.KAKAO_KEY,
        redirect_uri: process.env.REDIRECT_KAKAO_URL,
    };
    const params = new URLSearchParams(config).toString();
    const url = `${baseLink}?${params}`;
    return res.redirect(url);
 };
 
export const finishKakaoLogin = async(req, res) =>{
    if(req.query.error){
        const err = req.query.error;
        console.log("에러", err);
        if(err === "consent_required"){
            // 사용자가 필요한 거 동의안함
            return res.send(`<script>alert("필요한 항목이 동의되지 않아서 취소되었습니다.");
            location.href='/login';</script>`);
        }
        if(err === "access_denied"){
            // 사용자가 로그인 취소 혹은 14세 동의
            return res.send(`<script>alert("로그인이 취소되었습니다.");
            location.href='/login';</script>`);
        }
    }
    const baseLink = "https://kauth.kakao.com/oauth";
    const config = {
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_KEY,
        client_secret: process.env.KAKAO_SECRET_KEY,
        redirect_uri: process.env.REDIRECT_KAKAO_URL,
        code: req.query.code
     };
    const params = new URLSearchParams(config).toString();
    const finalLink = `${baseLink}/token?${params}`;
    try{
        const tokenRequest = await (
            await fetch(finalLink, {
              method: "POST",
              headers: {
                'content-type':'application/x-www-form-urlencoded;charset=utf-8'
              },
            })
          ).json();
        if("access_token" in tokenRequest){
            const {access_token} = tokenRequest;
            const userData = await(
                await fetch(`https://kapi.kakao.com/v2/user/me`, {
                    headers:{
                        Authorization: `Bearer ${access_token}`,
                    }
                })
            ).json();
            console.log("유저 정보:", userData);
            if(userData.kakao_account.email_needs_agreement){
                const configForEmail = {
                    client_id: process.env.KAKAO_KEY,
                    redirect_uri: process.env.REDIRECT_KAKAO_URL,
                    response_type: "code",
                    scope: "account_email"
                 };
                 const paramsForEmail = new URLSearchParams(configForEmail).toString();
                const askingEmailLink = `${baseLink}/authorize?${paramsForEmail}`
                return res.redirect(askingEmailLink);
            }
            else if(!userData.kakao_account.is_email_valid || !userData.kakao_account.is_email_verified){
                return res.send(`<script>alert("이메일이 카카오에서 valid/verified되지 않아서 취소되었습니다.");
                location.href='/login';</script>`);
            }
            const email = userData.kakao_account.email;
            const profile = userData.kakao_account.profile;
            req.session.access_token = access_token;
            let existingUser = await User.findOne({email}).populate("school"); 
            if(existingUser){
                //차단된 계정 확인
                if(existingUser.block){
                    return res.send(`<script>alert("신고를 받아 차단된 계정입니다.");
                            location.href='/login';</script>`);
                }
                // 사이트계정에는 프사가 없고 카톡프사는 있을 경우
                if(!existingUser.avatarUrl && !profile.is_default_image){
                    const avatarUrl = profile.profile_image_url; 
                    existingUser = await User.findByIdAndUpdate(
                        existingUser._id, {avatarUrl, social:true,
                            social: "Kakao", kakaoImg:true, emailCertificated:true}, {new: true}
                        ).populate("school");
                }
                req.session.loggedIn = true;
                req.session.user = existingUser;
                return res.redirect("/");
            }else{ // 계정이 없을 경우(회원가입)
                const password = Math.random().toString(36).slice(2); 
                // 비밀번호 찾기로 바꾸지 않는이상 일반 로그인을 할 수 없게됨
                
                // 프사가 있는지 확인
                if(!profile.is_default_image){
                    const createdUser = await User.create({
                        name: profile.nickname,
                        avatarUrl: profile.profile_image_url,
                        email,
                        emailCertificated: true,
                        username: userData.id,
                        password,
                        social: "Kakao"
                    })
                    req.session.loggedIn = true;
                    req.session.user = createdUser;
                }else{// 프사없는 유저의 회원가입
                    const createdUser = await User.create({
                        name: profile.nickname,
                        email,
                        emailCertificated: true,
                        username: userData.id,
                        password,
                        social: "Kakao"
                    })
                    req.session.loggedIn = true;
                    req.session.user = createdUser;
                }
                return res.redirect("/user/social-enroll"); // 학교 정보 등을 마저 입력하게 하기
            }
        }
        return res.redirect("/");
    }catch(error){
        console.log("error", error);
        return res.send(`<script>alert("${error._message}");
            location.href='/login';</script>`);
    }
};

 export const startNaverLogin = async (req,res) => {
    const baseLink = "https://nid.naver.com/oauth2.0/authorize";
    const config = {
        response_type: "code",
        client_id: process.env.NAVER_KEY,
        redirect_uri: process.env.REDIRECT_NAVER_URL,
        state: "RANDOM_STATE"
    }
    const params = new URLSearchParams(config).toString();
    const url = `${baseLink}?${params}`;
    return res.redirect(url);
 }
 
 export const finishNaverLogin = async (req, res) =>{
    if(req.query.error){
        const err = req.query.error;
        console.log("에러", err);
        if(err === "consent_required"){
            // 사용자가 필요한 거 동의안함
            return res.send(`<script>alert("필요한 항목이 동의되지 않아서 취소되었습니다.");
            location.href='/login';</script>`);
        }
        if(err === "access_denied"){
            // 사용자가 로그인 취소 혹은 14세 동의
            return res.send(`<script>alert("로그인이 취소되었습니다.");
            location.href='/login';</script>`);
        }
    }

    const baseLink ="https://nid.naver.com/oauth2.0/token";
    const config = {
        grant_type: "authorization_code",
        client_id: process.env.NAVER_KEY,
        client_secret: process.env.NAVER_SECRET_KEY,
        redirect_uri: process.env.REDIRECT_NAVER_URL,
        code: req.query.code,
        state: req.query.state
     };
    const params = new URLSearchParams(config).toString();
    const url = `${baseLink}?${params}`;
    try{
        const tokenRequest = await (
            await fetch(url, {
              method: "POST",
              headers: {
                'content-type':'application/x-www-form-urlencoded;charset=utf-8'
              },
            })
          ).json();
        if ("access_token" in tokenRequest) {
            const { access_token } = tokenRequest;
            const userData = await (
              await fetch("https://openapi.naver.com/v1/nid/me", {
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
              })
            ).json();
            const profile = userData.response.profile_image;
            const email = userData.response.email;
            req.session.access_token = access_token;
            let existingUser = await User.findOne({email}).populate("school"); 
            if(existingUser){
                // 사이트계정에는 프사가 없고 네이버 프사는 있을 경우 추가
                if(!existingUser.avatarUrl && profile){
                    const avatarUrl = profile; // 네이버이미지url은 언제까지나 계속 있나? 확인해봐야함
                    existingUser = await User.findByIdAndUpdate(
                        existingUser._id, {avatarUrl,  emailCertificated: true,}, {new: true}
                        ).populate("school");
                }
                //차단된 계정일 경우
                if(existingUser.block){
                    return res.send(`<script>alert("신고를 받아 차단된 계졍입니다.");
                            location.href='/login';</script>`);
                }
                req.session.loggedIn = true;
                req.session.user = existingUser;
                return res.redirect("/");
            } else{ // 계정이 없을 경우(회원가입)
            const password = Math.random().toString(36).slice(2); 
            // 비밀번호 찾기로 바꾸지 않는이상 일반 로그인을 할 수 없게됨
            // 프사가 있는지 확인
            if(profile){
                const createdUser = await User.create({
                    name:userData.response.name,
                    avatarUrl: profile,
                    email,
                    emailCertificated: true,
                    username:userData.response.id,
                    password,
                    social: "Naver"
                })
                req.session.loggedIn = true;
                req.session.user = createdUser;
            }else{// 프사없는 유저의 회원가입
                const createdUser = await User.create({
                    name: userData.response.name,
                    email,
                    emailCertificated: true,
                    username: userData.response.id,
                    password,
                    social: "Kakao"
                })
                req.session.loggedIn = true;
                req.session.user = createdUser;
            }
            return res.redirect("/user/social-enroll"); // 학교 정보 등을 마저 입력하게 하기
        }    
        }
        return res.redirect("/");
    }catch(error){
        console.log("error", error);
        return res.send(`<script>alert("${error._message}");
            location.href='/login';</script>`);
    }
};

export const getSocialEnroll = (req, res) =>{
    return res.render("users/socialEnroll", {pageTitle:"추가 정보 입력"});
}
export const postSocialEnroll = async(req, res) =>{
    const {name, schoolName} = req.body;
    try{
        if(schoolName){
            const school = await School.findOne({name:schoolName});
            const updatedUser = await User.findByIdAndUpdate(
                req.session.user._id, 
                {name, school: school._id}, 
                {new: true}
                ).populate("school");
            req.session.user = updatedUser;
        }else{
            const updatedUser = await User.findByIdAndUpdate(
                req.session.user._id, 
                {name}, 
                {new: true}
                );
            req.session.user = updatedUser;
        }
        console.log(req.session.user);
        return res.redirect("/");
    }catch(error){
        console.log(error);
        return res.status(400).render("404", {pageTitle: `추가 정보 입력 중 에러`, errorMessage: error._message});
    }
    
}


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
    let emailCertificated = true;
    
    //email과 username(id)만 다른 사람과 안겹치게 처리하자. 이름은 겹칠수도 있으니 ㅇㅇ..
    if(username != req.session.user.username)
        idExists = await User.exists({username});
    if(email != req.session.user.email)
        emailExists = await User.exists({email});
        emailCertificated = false;
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
                emailCertificated,
                username
            },
                {new: true}
        ).populate("school");
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
    try{
        user.password = newPassword;
        await user.save();
        return res.redirect("/"); 
    }catch(error){
        console.log(error);
        return res.status(400).render("404", {pageTitle: "비밀번호 변경 에러", errorMessage:error._message});
    }
}


export const logout = async(req, res) => { 
    if(req.session.user.social === "Kakao"){ // 사용자 액세스 토큰과 리프레시 토큰을 만료
        try{
            const logoutRequest = await (
                await fetch( "https://kapi.kakao.com/v1/user/logout",{
                    headers:{
                        Authorization: `Bearer ${req.session.access_token}`
                    }
                })
             ).json();
            if(logoutRequest)
                console.log(`소셜 로그아웃 성공: ${logoutRequest}`);
        }catch(error){
            console.log(error);
        }
    }
    
    req.session.destroy();
    return res.redirect("/");
};

export const leave = async(req, res) => {
    try{
        await Posting.deleteMany({"user":req.session.user._id});
        const user = await User.findById(req.session.user._id);
        if (user.social === "Naver"){
            const baseLink ="https://nid.naver.com/oauth2.0/token";
            const config = {
                grant_type: "delete",
                client_id: process.env.NAVER_KEY,
                client_secret: process.env.NAVER_SECRET_KEY,
                access_token:req.session.access_token,
                service_provider:"NAVER"
            };
            const params = new URLSearchParams(config).toString();
            const url = `${baseLink}?${params}`;
            const tokenReq = await (
                await fetch(url, {
                  method: "POST"
                })
              ).json();
            console.log(tokenReq);
        }else if(user.social === "Kakao"){
            const leaveRequest = await (
                await fetch( "https://kapi.kakao.com/v1/user/unlink",{
                    headers:{
                        Authorization: `Bearer ${req.session.access_token}`
                    }
                })
             ).json();
            console.log("소셜 탈퇴:", leaveRequest);
        }
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
    console.log(user);
    return res.render("users/profile", {pageTitle:`${user.name}님의 로그`, user});
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
        console.log(user);
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
            //await User.findByIdAndDelete(id);
            user.block = true;
            user.save();
            console.log(user);
            console.log(`username ${user.username} is 50times reported and deleted`);
        }catch(error){
            return res.status(400).render("404", {pageTitle:"신고하기 에러", errorMessage:error._message});
        } 
    }
    return res.redirect(`/`);
}

export const getAddSchedule = (req,res) => {
    return res.render("users/addCalendarSchedule", { pageTitle: "일정 추가"});
}

export const postAddSchedule = async (req,res) => {
    const {
        session: {
            user: { _id },
        },
        body: {title, start},
    } = req;
    try {
        const user = await User.findById(_id);
        const event = await Event.create({
            title,
            start,
            allDay:true,
            user
    });
    } catch (error) {
        console.log(error);
        return res.status(400).render("404", {pageTitle:"일정추가 에러", errorMessage:error._message});
    }
    
    return res.send(`<script>alert("일정 등록 완료"); opener.location.reload(); window.close();</script>`);
}
export const postDeleteSchedule = async (req,res) => {
    const {
        session: {
            user: { _id },
        },
        body: {title},
    } = req;
    try{
        const user = await User.findById(_id);
        const event = await Event.findOneAndDelete({
            title,
        });
        console.log(event);
        return res.send(`<script>alert("일정 삭제 완료");  location.href='/calendar'; </script>`);
    }catch(error){
        console.log(error);
        return res.status(400).render("404", {pageTitle:"삭제하기 에러", errorMessage:error._message});
    }
}

export const postChangeschedule = async (req,res) => {
    const {
        body: {title,start},
    } = req;
    console.log(title,start);
    try{
        const user = await User.findById(req.session.user._id);
        const event = await Event.findOne({title:req.body.title});
        event.start = start;
        event.save();
        console.log(event);
        
        return res.send(`<script>alert("일정 변경 완료");  location.href='/calendar'; </script>`);
    }catch(error){
        console.log(error);
        return res.status(400).render("404", {pageTitle:"변경하기 에러", errorMessage:error._message});
    }
}

