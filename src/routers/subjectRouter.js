import express from "express";
import { search, see, list, getUploadTest, postUploadTest,  getEditTest, postEditTest, setting, solve, result, community} from "../controllers/subjectController";

const subjectRouter = express.Router();

subjectRouter.get("/search", search);
subjectRouter.get("/:id", see);

subjectRouter.get("/:id/test/list", list);
subjectRouter.route("/:id/test/upload").get(getUploadTest).post(postUploadTest);
subjectRouter.route("/:id/test/:testId/edit").get(getEditTest).post(postEditTest);

subjectRouter.get("/:id/test/setting", setting);
subjectRouter.get("/:id/test/solve", solve);
subjectRouter.get("/:id/test/result", result);

subjectRouter.get("/:id/community", community);

export default subjectRouter;