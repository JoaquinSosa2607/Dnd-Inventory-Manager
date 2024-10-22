import { armorRepository } from "../config/repository/repository";
import { Armor } from "../entities/Armor";

export async function findArmorById(armorId: number) {
    const armor: Armor | null = await armorRepository.findOne({
        where: {
            id: armorId
        }
    });
    return armor;
}