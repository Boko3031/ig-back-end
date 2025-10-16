import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./route/user.route.js";
import postRouter from "./route/post.route.js";
import dotenv from "dotenv";
import commentRouter from "./route/comment.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);
};
connectDB();

app.use("/", userRouter);
app.use("/", postRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
  console.log(`App is running http://localhost:${PORT}/`);
});
