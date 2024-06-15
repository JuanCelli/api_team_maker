import { Router } from "express";
import { validInputId } from "../middlewares/validInputId.js";
import passport from "passport";
import { addMatch, createLeague, getLeagueById } from "../controllers/league.controller.js";


const router = Router()

router.get("/:id",validInputId,passport.authenticate("current"),getLeagueById)

router.post("/",passport.authenticate("current"),createLeague)

router.post("/add/:idMatch/to/:idLeague",validInputId,passport.authenticate("current"),addMatch)


export default router