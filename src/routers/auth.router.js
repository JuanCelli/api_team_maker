import { Router } from "express";
import { register, failRegister, authGoogleSuccess } from "../controllers/auth.controller.js";
import passport from "passport";




const router = Router()

router.post("/login",()=>{

})
router.post("/register",passport.authenticate("register",{failureRedirect:"/auth/fail-register"}) , register)

router.get("/google",passport.authenticate("google",{scope:['email','profile']}))

router.get("/google/callback",passport.authenticate( 'google', {successRedirect: '/auth/google/success',failureRedirect: '/auth/register/failure'}))

router.get("/google/success",authGoogleSuccess)

router.post("/logout" ,()=>{

})



router.get("/current" ,()=>{

})

router.post("/change-password" ,()=>{

})

router.get("/register/failure", failRegister)

export default router