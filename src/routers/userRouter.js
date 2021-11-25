import express from "express";
import {
    protectorMiddleware,
    publicOnlyMiddleware,
    avatarUpload,
  } from "../middlewares";
import {user, getEdit, postEdit, logout, leave, startKakaoLogin, finishKakaoLogin, getChangePassword, postChangePassword} from "../controllers/userController";
// import passport from "passport";
// const KakaoStrategy = require('passport-kakao').Strategy;
const userRouter = express.Router();

// passport.use('kakao', new KakaoStrategy({
//     clientID: process.env.KAKAO_KEY,
//     callbackURL: process.env.REDIRECT_URL,
// }, async(accessToken, refreshToken, profile, done) => {
//  console.log(profile);
//  console.log(accessToken); 
//  console.log(refreshToken);
// }));

userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.get("/logout",protectorMiddleware, logout);
userRouter.get("/leave",protectorMiddleware, leave);
userRouter.get("/kakao/start", publicOnlyMiddleware, startKakaoLogin);
userRouter.get("/kakao/finish",publicOnlyMiddleware, finishKakaoLogin);
// userRouter.get("/kakao/start", passport.authenticate('kakao'));
// userRouter.get("/kakao/finish", passport.authenticate(
//         'kakao', { failureRedirect: '/', }), (req, res) => 
//         { res.redirect('/'); });
userRouter.get("/:id",user);
export default userRouter;