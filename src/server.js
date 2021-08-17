import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import subjectRouter from "./routers/subjectRouter";
import userRouter from "./routers/userRouter";

const PORT = 5000;
const app = express();
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/subject", subjectRouter);
app.use("/user",userRouter);


const handleListening = () =>
    console.log(`Server listening - port: http://localhost:${PORT}🧭🏝`);

app.listen(PORT, handleListening);