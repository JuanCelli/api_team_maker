import { Router } from "express";
import { validInputId } from "../middlewares/validInputId.js";
import passport from "passport";
import { addMatch, createLeague, getLeagueById } from "../controllers/leagues.controller.js";


const router = Router()

router.get("/:id",validInputId,passport.authenticate("current"),getLeagueById)

router.post("/",passport.authenticate("current"),createLeague)

router.post("/:idLeague/add/:idMatch",validInputId,passport.authenticate("current"),addMatch)


export default router