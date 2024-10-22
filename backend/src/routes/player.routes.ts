import { Router } from "express";
import { createPlayer, getAllPlayers, getPlayerById } from "../controllers/player.controller";

const router = Router();

// POST
router.post("/create-player", createPlayer);

//GET
router.get("/all-players", getAllPlayers);
router.get("/:playerId", getPlayerById);

export default router;
