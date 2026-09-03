import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import dotenv from 'dotenv'
dotenv.config()

export const authenticate = async (req, res, next) => {
  //token read from req header
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Token Not Found.",
    });
  }

  //decoding the token
  const data = jwt.verify(token, process.env.JWT_SECRET);

  //finding the user
  const user = await userModel.findById(data.id);

  req.user = user;

  next();
};
