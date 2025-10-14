import express from "express";
import { login } from "../controller/user/login.js";
import { signUp } from "../controller/user/signUp.js";
import { ToggleFollow } from "../controller/user/toggleFollow.js";
import { middleware } from "../middleWare/AuthMiddle.js";
import { OnePerson } from "../controller/user/profile.js";

const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/signUp", signUp);
userRouter.post("/toggle-follow/:followedUserId", middleware, ToggleFollow);
userRouter.get("/user-posts/:personId", OnePerson);

export default userRouter;
