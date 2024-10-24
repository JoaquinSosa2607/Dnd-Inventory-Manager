import { Router } from "express";
import { createPlayer, getAllPlayers, getEnums, getPlayerById, getUserPlayers } from "../controllers/player.controller";
import { isUserRole } from "../middlewares/validateUser";

const router = Router();

// POST
router.post("/create-player", isUserRole, createPlayer);

//GET
router.get("/all-players", getAllPlayers);
router.get("/user-players", isUserRole, getUserPlayers);
router.get("/:playerId", getPlayerById);

export default router;
