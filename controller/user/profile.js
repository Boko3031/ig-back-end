import { userModel } from "../../Schema/SchemaUser.js";

export const OnePerson = async (req, res) => {
  const params = req.params;
  const personId = params.personId;
  const person = await userModel.findById({ personId });
  res.status(200).json(person);
};
