import express from "express";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter.js";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use('/api', apiRouter);

export default app;