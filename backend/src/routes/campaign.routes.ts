import { Router } from "express";
import { getAllCampaigns } from "../controllers/campaign.controller";

const router = Router();

router.get("/all-campaigns", getAllCampaigns);

export default router;