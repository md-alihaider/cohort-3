import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import {
  createAccessToken,
  createRefreshToken,
  readRefreshToken,
} from "../utils/auth.utils.js";

/**
 * @description Register an user and save the data from req.body
 * @params req express.request
 * @params req.body Object
 */

export const register = async (req, res) => {
  //recieve payload
  const { email, name, password } = req.body;

  //check if user exist already
  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already exists with this email address",
      errors: [
        {
          path: "email",
          msg: "User already exists with this email address",
        },
      ],
    });
  }

  //if not then create user
  const user = userModel.create({
    email,
    name,
    passwordHash: await bcryptjs.hash(password, 12),
  });

  //generate tokens
  const accessToken = createAccessToken({
    userId: user._id,
    role: user.role,
  });
  const refreshToken = createRefreshToken({
    userId: user._id,
    role: user.role,
  });

  //save refershToken cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  await userModel.findByIdAndUpdate((await user)._id, {
    refreshToken,
  });

  //and send accessToken in response
  res.status(201).json({
    message: "User register successfully",
    data: {
      user: {
        email: (await user).email,
        name: (await user).name,
        id: (await user)._id,
      },
      accessToken,
    },
  });
};

/**
 * @description Login an user and create new set of access and refresh Token
 */

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcryptjs.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const accessToken = createAccessToken({
    userId: user._id,
    role: user.role,
  });

  const refershToken = createRefreshToken({
    userId: user._id,
    role: user.role,
  });

  await userModel.findOneAndUpdate(
    {
      email,
    },
    {
      refershToken,
    },
  );

  res.cookie("refreshToken", refershToken, {
    httpOnly: true,
  });

  res.status(200).json({
    message: "user loggedIn successfully",
    data: {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      accessToken,
    },
  });
};

/**
 *
 */

export const refresh = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token is required",
    });
  }

  try {
    const decoded = readRefreshToken(refreshToken);
    const { userId, role } = decoded;
    const user = await userModel.findById(userId);

    if (refreshToken != user.refreshToken) {
      await userModel.findByIdAndUpdate(user._id, {
        refreshToken: null,
      });

      return res.status(401).json({
        message: "Refresh token mismatch",
      });
    }

    const accessToken = createAccessToken({
      userId,
      role,
    });
    const newRefershToken = createRefreshToken({
      userId,
      role,
    });

    await userModel.findByIdAndUpdate(user._id, {
      refreshToken: newRefershToken,
    });

    res.cookie("refreshToken", newRefershToken, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "Token rotated successfully",
      data: {
        user: {
          email: user.email,
          name: user.name,
          id: user._id,
        },
        accessToken,
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid refresh token",
    });
  }
};
