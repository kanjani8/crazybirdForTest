import express from "express";
import {testbirdmain} from "../controllers/globalController";
import {login, enroll} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/",testbirdmain);
globalRouter.get("/login", login);
globalRouter.get("/enroll", enroll);

export default globalRouter;