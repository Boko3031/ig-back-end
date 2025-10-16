import express from "express";
import { middleware } from "../middleWare/AuthMiddle.js";
import { createPost } from "../controller/post/createPost.js";
import { searchPost } from "../controller/post/searchPost.js";
import { allPost } from "../controller/post/allPost.js";
import { togglePostLike } from "../controller/post/togglePostLike.js";

const postRouter = express.Router();
postRouter.post("/create", middleware, createPost);
postRouter.get("/user-posts", middleware, searchPost);
postRouter.get("/post", allPost);
postRouter.post("/toggle-like/:postId", middleware, togglePostLike);

export default postRouter;
