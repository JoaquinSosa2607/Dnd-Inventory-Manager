import { AppDataSource } from "../../db";
import { Player } from "../../entities/Player";

export const playerRepository = AppDataSource.getRepository(Player);