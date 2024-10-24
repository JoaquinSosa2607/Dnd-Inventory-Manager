import { Campaign } from "../../entities/Campaign";
import { Classes, Species } from "../enums";


export interface CreatePlayerInterface {
    name: string;
    species: Species;
    player_class: Classes;
    level: number;
    campaign: Campaign;
}