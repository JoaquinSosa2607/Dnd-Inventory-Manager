import { Request, Response } from 'express';
import { CreatePlayerInterface } from "../helpers/interfaces/player.interface";
import { createPlayerSchema } from "../helpers/validators/player.schema";
import { Player } from "../entities/Player";
import { findPlayerById, savePlayer } from "../services/player.service";
import { playerRepository } from "../config/repository/repository";

export const createPlayer = async (req: Request, res: Response) => {
    try {
        await createPlayerSchema.validate(req.body);
        const { name, species, player_class, level }: CreatePlayerInterface = req.body;
    
        const player: Player = await savePlayer(name, species, player_class, level);
        res.status(201).send({ message: `Personaje creado con éxito, bienvenido ${player.name}!` });
        return;
       
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
            return;
        }
    }
};

export const getAllPlayers = async (req: Request, res: Response) => {
    try {
        const players: Player[] = await playerRepository.find();
        if (players.length === 0) res.status(404).send({ message: "No hay personajes registrados." });

        res.status(200).json({ Players: players });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
            return;
        }
    }
};

export const getPlayerById = async (req: Request, res: Response) => {
    try {
        const playerId = parseInt(req.params.playerId);

        const player = await findPlayerById(playerId);
        if(!player) res.status(404).send({ message: "Personaje no encontrado." });

        res.status(200).json({ Player: player });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        }
    }
};
