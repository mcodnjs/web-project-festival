import express from "express";

const apiRouter = express.Router();

apiRouter.get('/', function(req, res){
    res.send({greeting:'Hello React x Node.js'});
});

export default apiRouter;