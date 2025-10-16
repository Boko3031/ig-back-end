import { commentModel } from "../../Schema/SchemaComment.js";

export const getComment = async (req, res) => {
  const postId = req.params.postId;
  const comments = await commentModel
    .find({ post: postId })
    .populate({
      path: "post",
      populate: { path: "userId", select: "userName profilePic" },
    })
    .populate("user", "userName profilePic");
  res.status(200).json(comments);
};
