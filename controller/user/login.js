import { userModel } from "../../Schema/SchemaUser.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  const body = req.body;
  const { email, password } = body;
  const user = await userModel.findOne({ email });
  if (user) {
    const hashedPassword = user.password;
    const isValid = await compare(password, hashedPassword);
    if (isValid) {
      const accesToken = jwt.sign(
        {
          data: user,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json(accesToken);
    } else {
      res.status(404).json({ message: "password is wrong" });
    }
  } else {
    res.status(404).json({ message: "need to register" });
  }
};
