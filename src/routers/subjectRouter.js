import express from "express";
import { search, see, list, getUploadTest, postUploadTest,  
    getEditTest, postEditTest, deleteTest, 
    setting, solve, result, 
    community, getUploadPosting, postUploadPosting,
    watchPosting, getEditPosting, postEditPosting, deletePosting } from "../controllers/subjectController";
import { protectorMiddleware,communityUpload } from "../middlewares";

const subjectRouter = express.Router();

subjectRouter.get("/search", protectorMiddleware, search);
subjectRouter.get("/:id([0-9a-f]{24})", protectorMiddleware, see);

subjectRouter.get("/:id([0-9a-f]{24})/test/list", list);
subjectRouter.route("/:id([0-9a-f]{24})/test/upload").all(protectorMiddleware).get(getUploadTest).post(postUploadTest);
subjectRouter.route("/:id([0-9a-f]{24})/test/:testId([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEditTest).post(postEditTest);
subjectRouter.route("/:id([0-9a-f]{24})/test/:testId([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteTest);

subjectRouter.get("/:id([0-9a-f]{24})/test/setting", protectorMiddleware, setting);
subjectRouter.get("/:id([0-9a-f]{24})/test/solve", protectorMiddleware, solve);
subjectRouter.get("/:id([0-9a-f]{24})/test/result", protectorMiddleware, result);

subjectRouter.get("/:id([0-9a-f]{24})/community", protectorMiddleware, community);
subjectRouter.route("/:id([0-9a-f]{24})/community/upload")
.all(protectorMiddleware)
.get(getUploadPosting)
.post(communityUpload.fields([{name:"image", maxCount:1}, {name:"video", maxCount:1}]),postUploadPosting);
subjectRouter.get("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})", protectorMiddleware, watchPosting);
subjectRouter.route("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEditPosting)
.post(communityUpload.fields([{name:"image", maxCount:1}, {name:"video", maxCount:1}]),postEditPosting);
subjectRouter.route("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})/delete").all(protectorMiddleware).get(deletePosting);

export default subjectRouter;