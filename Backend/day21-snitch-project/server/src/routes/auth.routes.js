import { Router } from "express"
import {loginValidator, registerValidator} from '../validators/auth.validator.js'
import { login, register } from "../controller/auth.controller.js"


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
router.post("/login",loginValidator,login)


export default router