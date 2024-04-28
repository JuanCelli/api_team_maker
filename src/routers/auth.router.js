import { Router } from "express";
import { Register } from "../controllers/auth.controller.js";

const router = Router()

router.post("/login",()=>{

})

router.post("/register" , Register)

router.post("/logout" ,()=>{

})

router.get("/current" ,()=>{

})

router.post("/change-password" ,()=>{

})

export default router