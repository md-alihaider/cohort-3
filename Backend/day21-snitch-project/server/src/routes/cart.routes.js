import { Router } from 'express'
import {addToCartValidator}  from '../validators/cart.validator.js'
import { authenticate } from '../middlewares/auth.middleware.js';
import { addToCart, getCart } from '../controller/cart.controller.js';

const router = Router()

/**
 * @method POST
 * @endpoint /api/carts
 * @access Authenticated user
 * @description Add product to user's cart
 * @params req.body = {productId,quantity,size}
 */
router.post("/", authenticate, addToCartValidator, addToCart);

/**
 * @method GET
 * @endpoint /api/cart
 * @access Authenticate user
 * @description Get the user's cart
 */
router.get("/",authenticate,getCart)

export default router