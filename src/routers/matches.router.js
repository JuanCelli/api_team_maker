import { Router } from "express";
import { getMatchById } from "../controllers/matches.controller.js";
import { validInputId } from "../middlewares/validInputId.js";
import passport from "passport";


const router = Router()

router.get("/:idMatch",validInputId,passport.authenticate("current"),getMatchById)


export default router