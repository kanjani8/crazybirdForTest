import express from "express";
import {
    protectorMiddleware,
    publicOnlyMiddleware,
    avatarUpload,
    reportMiddleware
  } from "../middlewares";
import {user, getEdit, postEdit, 
    logout, leave, startKakaoLogin, finishKakaoLogin, startNaverLogin,finishNaverLogin, 
    getSocialEnroll, postSocialEnroll, getChangePassword, postChangePassword, 
    getUserReport, postUserReport, getEmailCertificate, postEmailCertificate, 
    getAddSchedule,postAddSchedule, postDeleteSchedule, postChangeschedule} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/certificate-email")
  .all(protectorMiddleware)
  .get(getEmailCertificate)
  .post(postEmailCertificate);
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
  userRouter.get("/naverlogin", publicOnlyMiddleware, startNaverLogin);
  userRouter.get("/naver/finish", publicOnlyMiddleware, finishNaverLogin);
  userRouter.route("/social-enroll")
    .all(protectorMiddleware)
    .get(getSocialEnroll)
    .post(postSocialEnroll);
  userRouter.route("/addSchedule").all(protectorMiddleware).get(getAddSchedule).post(postAddSchedule);
  userRouter.post("/deleteSchedule",protectorMiddleware,postDeleteSchedule);
  userRouter.post("/changeSchedule",protectorMiddleware,postChangeschedule);
export default userRouter;