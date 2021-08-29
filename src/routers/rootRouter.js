import express from "express";
import {testbirdmain} from "../controllers/globalController";
import {getLogin, postLogin, getEnroll, postEnroll } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/",testbirdmain);
rootRouter.route("/enroll").get(getEnroll).post(postEnroll);
rootRouter.get("/login").get(getLogin).post(postLogin);

export default rootRouter;