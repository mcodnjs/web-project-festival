import morgan from "morgan";
import apiRouter from "./routers/apiRouter.js";
const express = require('express');
const app = express();

const logger = morgan("dev");

app.use(logger);
app.use('/api', apiRouter);

export default app;
