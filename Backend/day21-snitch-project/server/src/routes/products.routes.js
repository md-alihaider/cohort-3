import { Router } from "express";

const router = Router();

/**
 * @method POST
 * @route /api/products
 * @description Create a new product and save its data into the database, image will be uploaded to imagekit
 * req.body = {title,description,price:{amount,currency},sizes:[{size,stock},{size,stock}],images}
 */



export default router;
