import { Router } from "express";
import { getAllCampaigns } from "../controllers/campaign.controller";
import { getEnums } from "../controllers/player.controller";

const router = Router();

// GET
router.get("/all-campaigns", getAllCampaigns);
router.get("/enums", getEnums);

export default router;