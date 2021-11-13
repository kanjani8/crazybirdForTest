import express from "express";
import {testbirdmain} from "../controllers/globalController";
import {getLogin, postLogin, getEnroll, postEnroll } from "../controllers/userController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/",testbirdmain);
rootRouter.route("/enroll").all(publicOnlyMiddleware).get(getEnroll).post(postEnroll);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);

export default rootRouter;