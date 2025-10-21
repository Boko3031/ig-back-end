import { userModel } from "../../Schema/SchemaUser.js";
export const Search = async (req, res) => {
  const searchParam = req.params.searchParam;
  const Search = await userModel.find({
    userName: new RegExp(searchParam, "i"),
  });
  res.status(200).json(Search);
};
