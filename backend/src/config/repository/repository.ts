import { AppDataSource } from "../../db";
import { Armor } from "../../entities/Armor";
import { Campaign } from "../../entities/Campaign";
import { Player } from "../../entities/Player";
import { User } from "../../entities/User";
import { Weapon } from "../../entities/Weapon";

export const playerRepository = AppDataSource.getRepository(Player);
export const armorRepository = AppDataSource.getRepository(Armor);
export const weaponRepository = AppDataSource.getRepository(Weapon);
export const userRepository = AppDataSource.getRepository(User);
export const campaignRepository = AppDataSource.getRepository(Campaign);