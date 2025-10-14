import jwt from "jsonwebtoken";

export const middleware = (req, _res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error("need auth header");

  const accesToken = authHeader.split(" ")[1];
  if (!accesToken) throw new Error("need access Token");

  const user = jwt.verify(accesToken, JWT_SECRET);
  if (!user) throw new Error("need to sign in");

  req.user = user.data;

  next();
};
