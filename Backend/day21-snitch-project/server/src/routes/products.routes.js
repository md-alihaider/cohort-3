import { Router } from "express";
import { createProductValidator } from "../validators/product.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createProduct, getAllProduct } from "../controller/product.controller.js";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 5, fileSize: 1 * 1024 * 1024 }, // 1 MB
});

const router = Router();

/**
 * @method POST
 * @route /api/products
 * @description Create a new product and save its data into the database, image will be uploaded to imagekit
 * @access seller
 * req.body = {title,description,price:{amount,currency},sizes:[{size,stock},{size,stock}],images}
 */
router.post(
  "/",
  //authenticate middleware
  authenticate,
  //seller validate middleware
  (req, res, next) => {
    if (req.user.role !== "seller") {
      return res
        .status(403)
        .json({ message: "User is not authorized to create a product" });
    }
    next();
  },
  //reading form data
  upload.array("images"),
  //parse the price and sizes from the request body
  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price))
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));
    next();
  },
  createProductValidator,
  createProduct,
);

/**
 * @method GET
 * @endpoint /api/products
 * @description Read all products form db
 * @access user
 */
router.get("/",authenticate,getAllProduct)

export default router;
