import express from "express";
import { search, see, list, register, update, setting, solve, result, community} from "../controllers/subjectController";

const subjectRouter = express.Router();

subjectRouter.get("/search", search);
subjectRouter.get("/:id", see);

subjectRouter.get("/:id/test/list", list);
subjectRouter.get("/:id/test/register", register);
subjectRouter.get("/:id/test/:testId/update", update);

subjectRouter.get("/:id/test/setting", setting);
subjectRouter.get("/:id/test/solve", solve);
subjectRouter.get("/:id/test/result", result);

subjectRouter.get("/:id/community", community);

export default subjectRouter;