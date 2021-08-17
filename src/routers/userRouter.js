import express from "express";
import {user, edit, logout} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id",user);
userRouter.get("/:id/edit", edit);
userRouter.get("/:id/logout", logout);

export default userRouter;