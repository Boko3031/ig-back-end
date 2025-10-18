import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: false },
  profilePic: { type: String, required: true },
  followers: [{ type: Schema.Types.ObjectId, required: true }],
  following: [{ type: Schema.Types.ObjectId, required: true }],
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const userModel = mongoose.model("users", userSchema);
