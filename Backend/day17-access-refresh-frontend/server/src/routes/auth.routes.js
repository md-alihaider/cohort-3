import { Router } from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import {
  genrateTokens,
  verifyAccessToken,
  verifyRefreshTokn,
} from "../utils/auth.js";

const router = Router();

/**
 * @POST /api/auth/register
 */
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

  //set refreshToken in db and save user
  user.refreshToken = refreshToken;
  await user.save();

  //set refresh token in cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // this means only server will read not client
  });

  //send res
  res.status(201).json({
    message: "User Registered Successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
    accessToken,
  });
});

/**
 * @GET /api/auth/me  to get user detail
 */
router.get("/me", async (req, res) => {
  //recieving accessToken from req in header
  const accessToken = req.headers.authorization?.split(" ")[1];

  //if not return
  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized, access token not found",
    });
  }

  try {
    //decoding the token to get info
    const decoded = verifyAccessToken(accessToken);

    //finding user from db
    const user = await userModel.findById(decoded.id);

    //sending res
    res.status(200).json({
      message: "User fetched Successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired access token",
    });
  }
});

/**
 * @POST /api/auth/refresh
 */

router.post("/refresh", async (req, res) => {
  //reciev refreshToken from cookei
  const refreshToken = req.cookies.refreshToken;

  //if not return
  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, refresh token not found",
    });
  }

  try {
    // decoding token to get info
    const decoded = verifyRefreshTokn(refreshToken);

    //find user from db
    const user = await userModel.findById(decoded.id);

    //check if user refresh token and req refresh token is same or not if not make user refreshToken null and save user
    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();

      return res.status(401).json({
        message: "Unauthorized, refresh token mismatch",
      });
    }

    //generate new tokens
    const { accessToken, refreshToken: newRefreshToken } = genrateTokens({
      userId: user._id,
    });

    //set new refresh token in cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    //set new access token in db
    user.refreshToken = newRefreshToken;
    await user.save();

    //send res
    res.status(200).json({
      message: "Token Refreshed Successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired refresh token",
    });
  }
});

export default router;
