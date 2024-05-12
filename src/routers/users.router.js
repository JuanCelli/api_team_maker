import { Router } from "express";
import { getUserById } from "../controllers/users.controller.js";
import { validInputId } from "../middlewares/validInputId.js";

const router = Router()

router.get("/:id",validInputId,getUserById)

export default router