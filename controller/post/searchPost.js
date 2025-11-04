import { postModel } from "../../Schema/SchemaPost.js";

export const searchPost = async (req, res) => {
  const user = req.user;

  const posts = await postModel.find({
    userId: user._id,
  });
  res.status(200).json(posts);
};
