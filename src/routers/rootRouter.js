import express from "express";
import {main, getReportError, postReportError} from "../controllers/globalController";
import {getLogin, postLogin, getEnroll, postEnroll, getFindId, postFindId } from "../controllers/userController";
import { publicOnlyMiddleware, reportMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/",main);
rootRouter.route("/enroll").all(publicOnlyMiddleware).get(getEnroll).post(postEnroll);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.route("/findId").all(publicOnlyMiddleware).get(getFindId).post(postFindId);
rootRouter.route("/findPassword").all(publicOnlyMiddleware).get(getFindId).post(postFindId);
rootRouter.route("/reportError").all(reportMiddleware).get(getReportError).post(postReportError);

export default rootRouter;