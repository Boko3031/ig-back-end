import express from "express";
import { middleware } from "../middleWare/AuthMiddle.js";
import { CreateComment } from "../controller/comment/createComment.js";
import { getComment } from "../controller/comment/getComment.js";

const commentRouter = express.Router();
commentRouter.post("/create", middleware, CreateComment);
commentRouter.get("/get/:postId", middleware, getComment);
export default commentRouter;
