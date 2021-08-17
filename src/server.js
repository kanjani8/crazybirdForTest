import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");


app.use(logger);
app.use("/", globalRouter);



const handleListening = () =>
    console.log(`Server listening - port: http://localhost:${PORT}🧭🏝`);

app.listen(PORT, handleListening);