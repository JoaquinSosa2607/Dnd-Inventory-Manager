import { Request, Response } from "express";
import { AddArmorInterface } from "../helpers/interfaces/armor.interface";
import { addArmorSchema } from "../helpers/validators/armor.schema";
import { Armor } from "../entities/Armor";
import { armorRepository, playerRepository } from "../config/repository/repository";
import { findArmorById } from "../services/armor.service";
import { Player } from "../entities/Player";
import { findPlayerById } from "../services/player.service";

export const addArmorToInventory = async (req: Request, res: Response) => {

    try {
        await addArmorSchema.validate(req.body);
        const { armorId, playerId }: AddArmorInterface = req.body;

        const armor: Armor | null = await findArmorById(armorId);
        if(!armor) {
            res.status(404).send({ message: "Armadura no registrada." });
            throw new Error("Armadura no registrada." );
        }

        const player: Player | null = await findPlayerById(playerId);
        if(!player) {
            res.status(404).send({ message: "Personaje no registrado." });
            throw new Error("Personaje no registrado." );
        }

        player.armors = [armor];
        await playerRepository.save(player);

        res.status(200).send({ message: "Armadura agregada correctamente." });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
            return;
        }
    }
}

export const getAllArmors = async (req: Request, res: Response) => {
    try {
        const armors: Armor[] = await armorRepository.find();
        if(armors.length === 0) {
            res.status(404).send({ message: "No hay armaduras registradas." });
            throw new Error("No hay armaduras registradas.");
        }
        res.status(200).json({ Armors: armors });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
            return;
        }
    }
}