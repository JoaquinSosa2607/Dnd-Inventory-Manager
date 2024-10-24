import { playerRepository } from "../config/repository/repository";
import { Campaign } from "../entities/Campaign";
import { Player } from "../entities/Player";
import { User } from "../entities/User";
import { Classes, Species } from "../helpers/enums";

export async function savePlayer(name: string, species: Species, player_class: Classes, level: number, user: User, campaign: Campaign) {
    const newPlayer: Player = new Player()

    newPlayer.name = name;
    newPlayer.species = species;
    newPlayer.player_class = player_class;
    newPlayer.level = level;
    newPlayer.user = user;
    newPlayer.campaign = campaign;
    
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

export async function findUserPlayers(userId: number) {
    const players: Player[] = await playerRepository.find({
        where: {
            user: {
                id: userId
            }
        }
    });
    return players;
}