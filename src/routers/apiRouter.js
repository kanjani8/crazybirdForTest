import express from "express";
import { registerView, uploadComment, deleteComment} from "../controllers/communityController";

const apiRouter = express.Router();

apiRouter.post("/subject/:postingId([0-9a-f]{24})/view", registerView);
apiRouter.post("/posting/:postingId([0-9a-f]{24})/comment", uploadComment);
apiRouter.delete("/posting/:postingId([0-9a-f]{24})/comment", deleteComment);

export default apiRouter;