import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import subjectRouter from "./routers/subjectRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";
import apiRouter from "./routers/apiRouter";
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use(
  session({
      secret: process.env.COOKIE_SECRET,
      resave: false, //session에 아무런 변경사항이 없을 시에도 그 session을 다시 저장하는 옵션입니다.
      saveUninitialized: false, //새로 생성된 session에 아무런 작업이 이루어지지 않은 상황을 말합니다.login X
      cookie:{
        maxAge: 86400000, // 24h =  cookie expiration date
      },
      store: MongoStore.create({ 
        mongoUrl : process.env.DB_URL,
        ttl: 24 * 60 * 60 // 24h =  session expiration date
      }),
   })
);
// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//       //console.log(sessions);
//       next();
//   });
// });
app.use(flash());
app.use(localsMiddleware);
//user can access to this file
app.use("/frontJS", express.static("frontJS"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/uploads", express.static("uploads"));
app.use("/subject", subjectRouter);
app.use("/user",userRouter);
app.use("/api", apiRouter);

export default app;