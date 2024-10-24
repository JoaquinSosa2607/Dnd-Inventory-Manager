import { Request, Response } from "express";
import { CreatePlayerInterface } from "../helpers/interfaces/player.interface";
import { createPlayerSchema } from "../helpers/validators/player.schema";
import { Player } from "../entities/Player";
import { findPlayerById, findUserPlayers, savePlayer } from "../services/player.service";
import { playerRepository } from "../config/repository/repository";
import { User } from "../entities/User";
import { findUserById } from "../services/user.service";
import { IPayload } from "../middlewares";
import { extractPayload } from "../helpers/token/extractPayload";
import { Classes, Species } from "../helpers/enums";

export const createPlayer = async (req: Request, res: Response) => {
    try {
        await createPlayerSchema.validate(req.body);
        const { name, species, player_class, level, campaign }: CreatePlayerInterface =
            req.body;

        const payload: IPayload | null = extractPayload(req);
        if (!payload) {
            res.status(401).send({ message: "Error. Token null" });
            return;
        }
        const userId: number = parseInt(payload.id);
        const user: User | null = await findUserById(userId);
        if (!user) {
            res.status(404).send({ message: "Usuario no encontrado" });
            return;
        }

        const player: Player = await savePlayer(
            name,
            species,
            player_class,
            level,
            user,
            campaign
        );
        res.status(201).send({
            message: `Personaje creado con éxito, bienvenido ${player.name}!`,
        });
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
        if (!player) {
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

export const getUserPlayers = async (req: Request, res: Response) => {
    try {
        const payload: IPayload | null = extractPayload(req);
        if (!payload) {
            res.status(401).send({ message: "Error. Token null" });
            return;
        }
        const userId: number = parseInt(payload.id);
        const user: User | null = await findUserById(userId);
        if (!user) {
            res.status(404).send({ message: "Usuario no encontrado" });
            return;
        }

        const userPlayers: Player[] = await findUserPlayers(user.id);
        if(userPlayers.length === 0) {
            res.status(404).send({ message: "No tienes personajes registrados." });
            return;
        }

        res.status(200).json({ Players: userPlayers });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
            return;
        }
    }
}

export const getEnums = (req: Request, res: Response) => {
    try {
        const speciesArray: string[] = Object.values(Species);
        const classesArray: string[] = Object.values(Classes);

        res.status(200).json({ species: speciesArray, classes: classesArray });
        return;
    } catch (error) {
        res.status(500).send({ message: "Error al obtener los valores de los enums" });
        return;
    }
};
