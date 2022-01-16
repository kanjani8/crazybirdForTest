import express from "express";
import { registerView, uploadComment} from "../controllers/communityController";

const apiRouter = express.Router();

apiRouter.post("/subject/:postingId([0-9a-f]{24})/view", registerView);
apiRouter.post("/posting/:postingId([0-9a-f]{24})/comment", uploadComment);

export default apiRouter;