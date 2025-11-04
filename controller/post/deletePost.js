import { postModel } from "../../Schema/SchemaPost.js";

export const DeletePost = async (req, res) => {
  const deletedPostId = req.params.postId;
  await postModel.findByIdAndDelete(deletedPostId);
  res.status(200).json({ message: "amjilttai ustgalaa" });
};
