import mongoose from "mongoose";
import { Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  caption: { type: String, required: true },
  like: [{ type: Schema.Types.ObjectId, required: true }],
  images: { type: [{ type: String, required: true }], required: true },
  comments: [{ type: Schema.Types.ObjectId, required: true, ref: "comments" }],
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const postModel = mongoose.model("post", PostSchema);
