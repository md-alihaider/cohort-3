import { Router } from "express"
import {registerValidator} from '../validators/auth.validator.js'


const router = Router()

/**
 * @POST /api/auth/register
 * @params req Express req
 * @params req.body = { email,name,password}
 * @response res.status = 201 if successful
 */

router.post("/register",registerValidator,)

export default router