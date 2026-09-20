import { Router } from "express"
import {loginValidator, registerValidator} from '../validators/auth.validator.js'
import { login, register, refresh, getMe } from "../controller/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";


const router = Router()

/**
 * @POST /api/auth/register
 * @params req Express req
 * @params req.body = { email,name,password}
 * @response res.status = 201 if successful
 */
router.post("/register", registerValidator, register)

/**
 * @POST /api/auth/login
 */
router.post("/login", loginValidator, login)

/**
 * @POST /api/auth/refresh
 */
router.post("/refresh", refresh)

/**
 * @POST /api/auth/me
 */
router.get("/me", authenticate,getMe);

export default router