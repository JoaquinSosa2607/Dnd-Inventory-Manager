import { Router } from "express";
import { addArmorToInventory, getAllArmors } from "../controllers/armor.controller";

const router = Router();

// POST
router.post("/add-armor", addArmorToInventory);

// GET
router.get("/all-armors", getAllArmors);

export default router;