import express from "express";
import { search, see, community ,test,register,setting} from "../controllers/subjectController";

const subjectRouter = express.Router();

subjectRouter.get("/search", search);
subjectRouter.get("/:id/community", community);
subjectRouter.get("/:id/test", test);
subjectRouter.get("/:id/test/register", register);
subjectRouter.get("/:id/test/setting", setting);
subjectRouter.get("/:id", see);


export default subjectRouter;