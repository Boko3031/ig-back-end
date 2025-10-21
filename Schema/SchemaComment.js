import mongoose from "mongoose";
import { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  post: { type: Schema.Types.ObjectId, ref: "post", required: true },
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  comments: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
export const commentModel = mongoose.model("comments", CommentSchema);
