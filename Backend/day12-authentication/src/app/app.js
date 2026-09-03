import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { authenticate } from "../middleware/auth.middleware.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/auth/register", async (req, res) => {
  //step 1 get payload form user
  const { name, email, password } = req.body;

  //step 2 store in db
  // save data to db
  const user = await userModel.create({
    email,
    name,
    password: await bcrypt.hash(password, 10), //hash the password
  });

  //step 3 generate token
  const token = jwt.sign(
    {
      // _id
      id: user._id,
    },
    //jwt secret
    process.env.JWT_SECRET,
  );

  //step 4 send response to user
  res.status(201).json({
    message: "User Created Successfully",
    data: {
      user: {
        email,
        name,
        id: user._id,
      },
      token,
    },
  });
});

app.get("/api/auth/me", authenticate, async (req, res) => {
  console.log(req.user);
  res.status(200).json({
    data: {
      user: req.user,
    },
  });
});

app.post("/api/auth/login", async (req, res) => {
  //read payload from req
  const { email, password } = req.body;


  //find user based on email
  const user = await userModel.findOne({
    email,
  });

  //check is password valid 
  const isValidPassword = bcrypt.compare(password, user.password);


  //send res if not valid password
  if (!isValidPassword) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  //create login token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );


  //send res 
  res.status(200).json({
    message: "User Logged in Successfully",
    data: {
      user: {
        email: user.email,
        name: user.name,
      },
    },
    token,
  });
});

export default app;
