import { commentModel } from "../../Schema/SchemaComment.js";

export const CreateComment = async (req, res) => {
  const { postId, comment } = req.body;
  const userId = req.user._id;
  const commentCreate = await commentModel.create({
    user: userId,
    post: postId,
    comment,
  });
  res.status(200).json(commentCreate);
};
