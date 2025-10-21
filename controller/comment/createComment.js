import { commentModel } from "../../Schema/SchemaComment.js";

export const CreateComment = async (req, res) => {
  const { postId, comments } = req.body;
  console.log(comments);

  const userId = req.user._id;

  const commentCreate = await commentModel.create({
    user: userId,
    post: postId,
    comments,
  });
  res.status(200).json(commentCreate, { message: "Successfully created" });
};
