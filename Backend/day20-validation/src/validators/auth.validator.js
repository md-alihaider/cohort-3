import { body, validationResult } from "express-validator";

export const registerValidation = [
  body("email")
    .exists()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Email Adress"),
  body("phone")
    .exists()
    .withMessage("Phone is Required")
    .isMobilePhone("en-IN")
    .withMessage("Invalid Phone Number"),
  body("password")
    .exists()
    .withMessage("Password is Required")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password at least 6 Character long"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array(),
      });
    }

    next();
  },
];
