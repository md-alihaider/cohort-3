import { Router } from "express"
import {registerValidator} from '../validators/auth.validator.js'
import { register } from "../controller/auth.controller.js"


const router = Router()

/**
 * @POST /api/auth/register
 * @params req Express req
 * @params req.body = { email,name,password}
 * @response res.status = 201 if successful
 */

router.post("/register",registerValidator, register)

export default router