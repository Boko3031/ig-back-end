import express from "express";
import { middleware } from "../middleWare/AuthMiddle.js";
import { createPost } from "../controller/post/createPost.js";
import { searchPost } from "../controller/post/searchPost.js";
import { allPost } from "../controller/post/allPost.js";
import { togglePostLike } from "../controller/post/togglePostLike.js";
import { StrangersPost } from "../controller/post/strangePost.js";

const postRouter = express.Router();
postRouter.post("/create", middleware, createPost);
postRouter.get("/user-posts", middleware, searchPost);
postRouter.get("/post", allPost);
postRouter.post("/toggle-like/:postId", middleware, togglePostLike);
postRouter.get("/get-user-posts/:userId", middleware, StrangersPost);

export default postRouter;
