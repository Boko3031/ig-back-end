import { postModel } from "../../Schema/SchemaPost.js";

export const allPost = async (_req, res) => {
  const posts = await postModel.find({}).populate("userId");
  res.status(200).json(posts);
};
