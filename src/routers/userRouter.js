import express from "express";
import {
    protectorMiddleware,
    publicOnlyMiddleware,
    avatarUpload,
    reportMiddleware
  } from "../middlewares";
import {user, getEdit, postEdit, 
    logout, leave, startKakaoLogin, finishKakaoLogin, 
    getChangePassword, postChangePassword, getUserReport, postUserReport} from "../controllers/userController";
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
userRouter.route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/logout",protectorMiddleware, logout);
userRouter.get("/leave",protectorMiddleware, leave);
userRouter.get("/:userId([0-9a-f]{24})",protectorMiddleware, user);
userRouter.route("/:userId([0-9a-f]{24})/report")
  .all(protectorMiddleware)
  .get(getUserReport)
  .post(reportMiddleware, postUserReport);

userRouter.get("/kakao/start", publicOnlyMiddleware, startKakaoLogin);
userRouter.get("/kakao/finish",publicOnlyMiddleware, finishKakaoLogin);
// userRouter.get("/kakao/start", passport.authenticate('kakao'));
// userRouter.get("/kakao/finish", passport.authenticate(
  //         'kakao', { failureRedirect: '/', }), (req, res) => 
  //         { res.redirect('/'); });
  export default userRouter;