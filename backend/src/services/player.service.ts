import { playerRepository } from "../config/repository/repository";
import { Classes, Player, Species } from "../entities/Player";

export async function savePlayer(name: string, species: Species, player_class: Classes, level: number) {
    const newPlayer: Player = new Player()

    newPlayer.name = name;
    newPlayer.species = species;
    newPlayer.player_class = player_class;
    newPlayer.level = level;
    
    await playerRepository.save(newPlayer);
    return newPlayer;
}