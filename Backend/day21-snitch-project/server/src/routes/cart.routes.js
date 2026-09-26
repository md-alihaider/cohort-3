import { Router } from 'express'
import {addToCartValidator}  from '../validators/cart.validator.js'
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router()

/**
 * @method POST
 * @endpoint /api/carts
 * @access Authenticated user
 * @description Add product to user's cart
 * @params req.body = {productId,quantity,size}
 */
router.post("/",authenticate ,addToCartValidator);

export default router