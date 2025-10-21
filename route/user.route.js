import express from "express";
import { login } from "../controller/user/login.js";
import { signUp } from "../controller/user/signUp.js";
import { ToggleFollow } from "../controller/user/toggleFollow.js";
import { middleware } from "../middleWare/AuthMiddle.js";
import { OnePerson } from "../controller/user/profile.js";
import { Search } from "../controller/user/search.js";

const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/signUp", signUp);
userRouter.post("/toggle-follow/:followedUserId", middleware, ToggleFollow);
userRouter.get("/user-posts/:personId", OnePerson);
userRouter.get("/search/:searchParam", middleware, Search);

export default userRouter;
