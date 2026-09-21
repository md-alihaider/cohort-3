import { body, validationResult } from "express-validator";

export const createProductValidator = [
  body("title")
    .exists()
    .withMessage("Title is Required")
    .bail()
    .isString()
    .withMessage("Title must be a String Value")
    .bail()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Title length must be between 2 to 100 characters")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Title must contain only alphabets"),
  body("description")
    .exists()
    .withMessage("Description is Required")
    .bail()
    .isString()
    .withMessage("Description must be a String Value")
    .bail()
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage("Description length must be between 20 to 500 characters"),
  body("price.amount")
    .exists()
    .withMessage("Price is Required")
    .bail()
    .isFloat({ min: 0})
    .withMessage("Price must be a floating Value and must be greater than 0"),
  body("price.currency")
    .exists()
    .withMessage("Currency is Required")
    .bail()
    .isString()
    .withMessage("Currency must be a String Value")
    .bail()
    .trim()
    .isIn(["INR", "USD"])
    .withMessage("Currency must be INR or USD"),
];
