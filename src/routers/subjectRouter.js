import express from "express";
import { search, see, like, dislike} from "../controllers/subjectController";
import {list, getUploadTest, postUploadTest,  
    getEditTest, postEditTest, deleteTest, 
    setting, solve, result, report } from "../controllers/testController";
import {community, getUploadPosting, postUploadPosting,
    watchPosting, getEditPosting, postEditPosting, 
    deletePosting,getReportPosting, postReportPosting,getRecommend} from "../controllers/communityController";
import { protectorMiddleware, communityUpload, reportMiddleware } from "../middlewares";

const subjectRouter = express.Router();

//subject Page
subjectRouter.get("/search", protectorMiddleware, search);
subjectRouter.get("/:id([0-9a-f]{24})", protectorMiddleware, see);
subjectRouter.get("/:id([0-9a-f]{24})/like", protectorMiddleware, like);
subjectRouter.get("/:id([0-9a-f]{24})/dislike", protectorMiddleware, dislike);

//test Page
subjectRouter.get("/:id([0-9a-f]{24})/test/list", list);
subjectRouter.route("/:id([0-9a-f]{24})/test/upload").all(protectorMiddleware).get(getUploadTest).post(postUploadTest);
subjectRouter.route("/:id([0-9a-f]{24})/test/:testId([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEditTest).post(postEditTest);
subjectRouter.route("/:id([0-9a-f]{24})/test/:testId([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteTest);

//solving-testPage
subjectRouter.route("/:id([0-9a-f]{24})/test/setting")
    .all(protectorMiddleware)
    .get(setting).post(solve);
subjectRouter.post("/:id([0-9a-f]{24})/test/result", protectorMiddleware, result);
subjectRouter.get("/:id([0-9a-f]{24})/test/:testId([0-9a-f]{24})/report", protectorMiddleware, reportMiddleware, report);

//community page
subjectRouter.get("/:id([0-9a-f]{24})/community", protectorMiddleware, community);
subjectRouter.get("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})", protectorMiddleware, watchPosting);
subjectRouter.route("/:id([0-9a-f]{24})/community/upload")
    .all(protectorMiddleware)
    .get(getUploadPosting)
    .post(communityUpload.fields([{name:"image", maxCount:1}, {name:"video", maxCount:1}]),postUploadPosting);
subjectRouter.route("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})/edit")
    .all(protectorMiddleware)
    .get(getEditPosting)
    .post(communityUpload.fields([{name:"image", maxCount:1}, {name:"video", maxCount:1}]),postEditPosting);
subjectRouter.get("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})/delete",protectorMiddleware,deletePosting);
subjectRouter.route("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})/report")
    .all(protectorMiddleware)
    .get(getReportPosting)
    .post(reportMiddleware, postReportPosting);
subjectRouter.get("/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})/recommend",getRecommend);
export default subjectRouter;