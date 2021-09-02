import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import subjectRouter from "./routers/subjectRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use(
    session({
      secret: "Hello!",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
      console.log(sessions);
      next();
    });
  });
  app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/subject", subjectRouter);
app.use("/user",userRouter);

export default app;