import { postModel } from "../../Schema/SchemaPost.js";

export const StrangersPost = async (req, res) => {
  const userId = req.user._id;
  const strangerPosts = await postModel.find({}).populate("userId");
  res.status(200).json(strangerPosts);
};
