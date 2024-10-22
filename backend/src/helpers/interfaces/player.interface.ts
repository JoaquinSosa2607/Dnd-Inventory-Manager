import { Classes, Species } from "../../entities/Player";

export interface CreatePlayerInterface {
    name: string;
    species: Species;
    player_class: Classes;
    level: number;
}