import { Router } from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import { genrateTokens } from "../utils/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  //receive payload
  const { name, email, password } = req.body;

  //check if user exists
  const isUserExists = await userModel.findOne({ email });

  //send res if user exist
  if (isUserExists) {
    return res.status(400).json({
      message: "User already exists",
      error: [
        {
          path: "email",
          message: "User already exists",
        },
      ],
    });
  }


  //if not create user and hash password
  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  //create accessToken and refreshToken
  const { accessToken, refreshToken } = genrateTokens({ userId: user._id });

  //set refresh token in cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // this means only server will read not client
  });

  //send res
  res.status(201).json({
    message: "User Registered Successfully",
    data: {
      name: user.name,
      email: user.email,
    },
    accessToken,
  });
});

export default router;
