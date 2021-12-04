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

const userRouter = express.Router();

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
export default userRouter;