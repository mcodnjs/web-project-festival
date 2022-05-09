import express from "express";

const apiRouter = express.Router();
const path = require('path');

apiRouter.get('/', function(req, res){
    res.send({greeting:'Hello React x Node.js'});
});

export default apiRouter;
