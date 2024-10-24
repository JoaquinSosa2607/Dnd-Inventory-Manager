import { Request, Response } from 'express';
import { CreatePlayerInterface } from "../helpers/interfaces/player.interface";
import { createPlayerSchema } from "../helpers/validators/player.schema";
import { Classes, Player, Species } from "../entities/Player";
import { findPlayerById, savePlayer } from "../services/player.service";
import { playerRepository } from "../config/repository/repository";
import { User } from '../entities/User';
import { findUserById } from '../services/user.service';
import { IPayload } from '../middlewares';
import { extractPayload } from '../helpers/token/extractPayload';

export const createPlayer = async (req: Request, res: Response) => {
    try {
        await createPlayerSchema.validate(req.body);
        const { name, species, player_class, level }: CreatePlayerInterface = req.body;
        
        const payload: IPayload | null = extractPayload(req);
        if (!payload) {
            res.status(401).send({ message: "Error. Token null" });
            return 
        }
        const userId: number = parseInt(payload.id);
        const user: User | null = await findUserById(userId);
        if(!user) {
            res.status(404).send({ message: "Usuario no encontrado" });
            return;
        }

        const player: Player = await savePlayer(name, species, player_class, level, user);
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
        if (players.length === 0) {
            res.status(404).send({ message: "No hay personajes registrados." });
            return;
        }

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
        if(!player) {
            res.status(404).send({ message: "Personaje no encontrado." });
            return;
        }

        res.status(200).json({ Player: player });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
            return;
        }
    }
};
