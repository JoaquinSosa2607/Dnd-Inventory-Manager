import { AppDataSource } from "../../db";
import { Armor } from "../../entities/Armor";
import { Player } from "../../entities/Player";

export const playerRepository = AppDataSource.getRepository(Player);
export const armorRepository = AppDataSource.getRepository(Armor);