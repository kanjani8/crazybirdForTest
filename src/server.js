import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import subjectRouter from "./routers/subjectRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", rootRouter);
app.use("/subject", subjectRouter);
app.use("/user",userRouter);

export default app;