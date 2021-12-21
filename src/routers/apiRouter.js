import express from "express";
import { registerView } from "../controllers/communityController";

const apiRouter = express.Router();

apiRouter.post("/subject/:id([0-9a-f]{24})/community/:postingId([0-9a-f]{24})/view", registerView);

export default apiRouter;