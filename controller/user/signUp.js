import { hash } from "bcrypt";
import { userModel } from "../../Schema/SchemaUser.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const body = req.body;
  const email = body.email;
  const isExisting = await userModel.findOne({ email });
  const saltRounds = 10;
  const hashedPassword = await hash(body.password, saltRounds);

  const JWT_SECRET = process.env.JWT_SECRET;

  if (isExisting) {
    res.status(404).json({ message: "already exist" });
  } else {
    const response = await userModel.create({
      userName: body.userName,
      password: hashedPassword,
      email: body.email,
    });
    const accesToken = jwt.sign(
      {
        data: response,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json(accesToken);
  }
};
