import express from "express";
import { registerView } from "../controllers/communityController";

const apiRouter = express.Router();

apiRouter.post("/subject/:postingId([0-9a-f]{24})/view", registerView);

export default apiRouter;