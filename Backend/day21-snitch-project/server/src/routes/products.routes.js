import { Router } from "express";
import {
  createProductValidator,
  unlistProductValidator,
  listProductValidator,
} from "../validators/product.validator.js";
import {
  authenticate,
  authenticateSeller,
} from "../middlewares/auth.middleware.js";
import {
  createProduct,
  getAllProduct,
  unlistProduct,
  listProduct,
  getAllProductToSeller,
} from "../controller/product.controller.js";
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
  authenticateSeller,
  //reading form data
  upload.array("images"),
  //parse the price and sizes from the request body
  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));
    next();
  },
  createProductValidator,
  createProduct,
);

/**
 * @method GET
 * @endpoint /api/products
 * @description Read all the published products form db
 * @access user
 */
router.get("/", authenticate, getAllProduct);

/**
 * @method GET
 * @endpoint /api/products/seller
 * @description Read all products form db
 * @access seller
 */
router.get("/seller", authenticate, authenticateSeller, getAllProductToSeller);



/**
 * @method PATCH
 * @enpoint /api/products/unlist/:id
 * @description Unlist a product by its id
 * @access seller
 */
router.patch("/unlist/:id", authenticate, authenticateSeller,unlistProductValidator,unlistProduct);

/**
 * @method PATCH
 * @enpoint /api/products/unlist/:id
 * @description Unlist a product by its id
 * @access seller
 */
router.patch("/unlist/:id", authenticate, authenticateSeller,listProductValidator,listProduct);


export default router;
