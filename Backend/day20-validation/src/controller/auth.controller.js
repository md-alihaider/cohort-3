import userModel from "../models/user.model.js";
/**
 * req.body = {email,phone,password}
 */
export const register = async (req, res) => {
  const { email, phone, password } = req.body;

  const user = await userModel.create({
    email,
    phone,
    password: password, /// hash(password)
  });

  res.status(201).json({
    message: "User register successfully",
    data: {
      email,
      phone,
      id: user._id,
    },
  });
};
