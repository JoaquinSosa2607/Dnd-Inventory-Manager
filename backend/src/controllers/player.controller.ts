import { Request, Response } from 'express';
import { PlayerInterface } from "../helpers/interfaces/player.interface";
import { playerSchema } from "../helpers/validators/player.schema";
import { Player } from "../entities/Player";
import { savePlayer } from "../services/player.service";
import { playerRepository } from "../config/repository/repository";

export const createPlayer = async (req: Request, res: Response) => {
    try {
        await playerSchema.validate(req.body);
        const { name, species, player_class, level }: PlayerInterface = req.body;
    
        const player: Player = await savePlayer(name, species, player_class, level);
        res.status(201).send({ message: `Personaje creado con éxito, bienvenido ${player.name}!` });
    
       
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        }
    }
};

export const getAllPlayers = async (req: Request, res: Response) => {
    try {
        const players: Player[] = await playerRepository.find();
        if (players.length === 0) return res.status(404).send({ message: "No hay personajes registrados." });

        return res.status(200).json({ Players: players });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({ message: error.message });
        }
    }
};
