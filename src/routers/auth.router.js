import { Router } from "express";
import { register, failRegister } from "../controllers/auth.controller.js";
import passport from "passport";

const router = Router()

router.post("/login",()=>{

})
router.post("/register",passport.authenticate("register",{failureRedirect:"/auth/fail-register"}) , register)

router.post("/logout" ,()=>{

})



router.get("/current" ,()=>{

})

router.post("/change-password" ,()=>{

})

router.get("/fail-register", failRegister)

export default router