import { Router } from "express";
import { register, failRegister, login, failLogin } from "../controllers/auth.controller.js";
import passport from "passport";
import { passportCall } from "../auth/passport.callback.js";






const router = Router()

router.post("/login",passportCall("login",{failureRedirect:"/auth/login/failure"}),login)

router.post("/register",passportCall("register",{failureRedirect:"/auth/register/failure"}) , register)

router.get("/google",passport.authenticate("google",{scope:['email','profile']}))

router.get("/google/callback",passport.authenticate( 'google', {successRedirect: '/auth/google/success',failureRedirect: '/auth/register/failure'}))

router.get("/google/success",login)

router.post("/logout" ,()=>{

})



router.get("/current" ,()=>{

})

router.post("/change-password" ,()=>{

})

router.get("/register/failure", failRegister)
router.get("/login/failure", failLogin)

export default router