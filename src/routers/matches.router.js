import { Router } from "express";
import { createMatch, deleteMatch, getMatchById, joinPlayer, removePlayer } from "../controllers/matches.controller.js";
import { validInputId } from "../middlewares/validInputId.js";
import passport from "passport";


const router = Router()

router.get("/:idMatch",validInputId,passport.authenticate("current"),getMatchById)

router.post("/",passport.authenticate("current"),createMatch)

router.post("/:idMatch/join/:id",validInputId,passport.authenticate("current"),joinPlayer)

router.post("/:idMatch/remove/:id",validInputId,passport.authenticate("current"),removePlayer)

router.delete("/:idMatch",validInputId,passport.authenticate("current"),deleteMatch)

export default router