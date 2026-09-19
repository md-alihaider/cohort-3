import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

/**
 * @description Register an user and save the data from req.body
 * @params req express.request
 * @params req.body Object
 */

export const register = async (req, res) => {
  const { email, name, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({email})

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already exists with this email address",
      errors: [
        {
          field: "email",
          message:"User already exists with this email address"
        }
      ]
   })
  }
  
  const user = userModel.create({
    email,
    name,
    passwordHash: await bcryptjs.hash(password, 12)
  });
};
