import { Classes, Species } from "../../entities/Player";

export interface PlayerInterface {
    name: string;
    species: Species;
    player_class: Classes;
    level: number;
}