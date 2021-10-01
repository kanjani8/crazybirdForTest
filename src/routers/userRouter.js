import express from "express";
import {user, edit, logout, startKakaoLogin, finishKakaoLogin} from "../controllers/userController";
import passport from "passport";
const KakaoStrategy = require('passport-kakao').Strategy;
const userRouter = express.Router();

passport.use('kakao', new KakaoStrategy({
    clientID: process.env.KAKAO_KEY,
    callbackURL: process.env.REDIRECT_URL,
}, async(accessToken, refreshToken, profile, done) => {
 console.log(profile);
 console.log(accessToken);
 console.log(refreshToken);
}));

userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/kakao/start", passport.authenticate('kakao'));
userRouter.get("/kakao/finish", passport.authenticate(
        'kakao', { failureRedirect: '/', }), (req, res) => 
        { res.redirect('/'); });


userRouter.get("/:id",user);
export default userRouter;