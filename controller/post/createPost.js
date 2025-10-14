import { postModel } from "../../Schema/SchemaPost.js";

export const createPost = async (req, res) => {
  const body = req.body;
  const user = req.user;

  const response = await postModel.create({
    userId: user._id,
    caption: body.caption,
    images: body.images,
  });
  res.status(200).json(response);
};
