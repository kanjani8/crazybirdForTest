import express from "express";
import { search, see, list, getUploadTest, postUploadTest,  getEditTest, postEditTest, deleteTest, setting, solve, result, community} from "../controllers/subjectController";
import { protectorMiddleware } from "../middlewares";

const subjectRouter = express.Router();

subjectRouter.get("/search", search);
subjectRouter.get("/:id([0-9a-f]{24})", see);

subjectRouter.get("/:id([0-9a-f]{24})/test/list", list);
subjectRouter.route("/:id([0-9a-f]{24})/test/upload").all(protectorMiddleware).get(getUploadTest).post(postUploadTest);
subjectRouter.route("/:id([0-9a-f]{24})/test/:testId([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEditTest).post(postEditTest);
subjectRouter.route("/:id([0-9a-f]{24})/test/:testId([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteTest);

subjectRouter.get("/:id/test/setting", setting);
subjectRouter.get("/:id/test/solve", solve);
subjectRouter.get("/:id/test/result", result);

subjectRouter.get("/:id/community", community);

export default subjectRouter;