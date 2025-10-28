import { userModel } from "../../Schema/SchemaUser.js";

export const AnotherUserProfile = async (req, res) => {
  const userId = req.params.userId;
  const person = await userModel.findById(userId);
  res.status(200).json(person);
};
