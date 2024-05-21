import { Router } from "express";
import { createMatch, getMatchById, joinPlayer } from "../controllers/matches.controller.js";
import { validInputId } from "../middlewares/validInputId.js";
import passport from "passport";


const router = Router()

router.get("/:idMatch",validInputId,passport.authenticate("current"),getMatchById)

router.post("/",passport.authenticate("current"),createMatch)

router.post("/join/:id/to/:idMatch/",validInputId,passport.authenticate("current"),joinPlayer)

export default router