import { userModel } from "../../Schema/SchemaUser.js";

export const ToggleFollow = async (req, res) => {
  const params = req.params;
  const followingUserId = req.user._id;
  const followedUserId = params.followedUserId;

  const followingUser = await userModel.findById(followingUserId);
  const followedUser = await userModel.findById(followedUserId);

  const isfollowed = followedUser.followers.includes(followingUserId);

  if (followedUserId === followingUserId) {
    res.status(400).json({ message: "ishshshs chaavaashda" });
  } else {
    if (isfollowed) {
      await userModel.findByIdAndUpdate(followingUserId, {
        following: followingUser.following.filter((person) => {
          return person.toString() !== followedUserId;
        }),
      });

      await userModel.findByIdAndUpdate(followedUserId, {
        followers: followedUser.followers.filter((items) => {
          return items.toString() !== followingUserId;
        }),
      });

      res.status(200).json({ message: "success" });
    } else {
      await userModel.findByIdAndUpdate(followingUserId, {
        following: [...followingUser.following, followedUserId],
      });
      console.log(followingUserId);

      await userModel.findByIdAndUpdate(followedUserId, {
        followers: [...followedUser.followers, followingUserId],
      });
      console.log(followedUserId);
      res.status(200).json({ message: "success" });
    }
  }
};
