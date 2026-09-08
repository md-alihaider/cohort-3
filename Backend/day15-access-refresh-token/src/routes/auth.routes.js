import { Router } from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";

const router = Router();

router.post("/register", async (req, res) => {
  //receive payload
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

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

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });
});

export default router;
