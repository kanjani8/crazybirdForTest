import express from "express";
import {main, getReportError, postReportError, getMap, getCalendar} from "../controllers/globalController";
import {getLogin, postLogin, getEnroll, postEnroll, getFindId, postFindId,getFindPass,postFindPass } from "../controllers/userController";
import { publicOnlyMiddleware, reportMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/",main);
rootRouter.get("/map", getMap);
rootRouter.get("/calendar", getCalendar);
rootRouter.route("/enroll").all(publicOnlyMiddleware).get(getEnroll).post(postEnroll);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.route("/findId").all(publicOnlyMiddleware).get(getFindId).post(postFindId);
rootRouter.route("/findPassword").all(publicOnlyMiddleware).get(getFindPass).post(postFindPass);
rootRouter.route("/reportError").all(reportMiddleware).get(getReportError).post(postReportError);

export default rootRouter;