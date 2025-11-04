import { postModel } from "../../Schema/SchemaPost.js";

export const StrangersPost = async (req, res) => {
  const userId = req.params.userId;
  const strangerPosts = await postModel.find({ userId });
  res.status(200).json(strangerPosts);
};
