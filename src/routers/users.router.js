import { Router } from "express";
import { getUserByEmail, getUserById } from "../controllers/users.controller.js";
import { validInputId } from "../middlewares/validInputId.js";
import passport from "passport";


const router = Router()

router.get("/:id",validInputId,passport.authenticate("current"),getUserById)

router.get("/email/:email",getUserByEmail)

export default router