import { postModel } from "../../Schema/SchemaPost.js";

export const togglePostLike = async (req, res) => {
  const user = req.user;
  const params = req.params;
  const postId = params.postId;
  const post = await postModel.findById(postId);

  const postLikes = post.like;
  const isLiked = postLikes.includes(user._id);
  if (isLiked) {
    await postModel.findByIdAndUpdate(postId, {
      like: postLikes.filter((likes) => likes.toString() !== user._id),
    });
  } else {
    await postModel.findByIdAndUpdate(postId, {
      like: [...postLikes, user._id],
    });
  }
  res.status(200).json({ message: "success" });
};
