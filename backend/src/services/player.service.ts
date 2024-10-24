import { playerRepository } from "../config/repository/repository";
import { Classes, Player, Species } from "../entities/Player";
import { User } from "../entities/User";

export async function savePlayer(name: string, species: Species, player_class: Classes, level: number, user: User) {
    const newPlayer: Player = new Player()

    newPlayer.name = name;
    newPlayer.species = species;
    newPlayer.player_class = player_class;
    newPlayer.level = level;
    newPlayer.user = user;
    
    await playerRepository.save(newPlayer);
    return newPlayer;
}

export async function findPlayerById(playerId: number) {
    const player: Player | null = await playerRepository.findOne({
        where: {
            id: playerId
        },
        relations: {
            armors: true
        }
    });
    return player;
}