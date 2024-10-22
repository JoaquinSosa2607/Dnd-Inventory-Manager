import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Armor } from "./Armor";

export enum Species {
    Dragonborn = "Dragonborn",
    Dwarf = "Dwarf",
    Elf = "Elf",
    Gnome = "Gnome",
    Half_Elf = "Half Elf",
    Halfling = "Halfling",
    Half_Orc = "Half Orc",
    Human = "Human",
    Tiefling = "Tiefling"
}

export enum Classes {
    Barbarian = "Barbarian",
    Bard = "Bard",
    Cleric = "Cleric",
    Druid = "Druid",
    Fighter = "Fighter",
    Monk = "Monk",
    Paladin = "Paladin",
    Ranger = "Ranger",
    Rogue = "Rogue",
    Sorcerer = "Sorcerer",
    Warlock = "Warlock",
    Wizard = "Wizard"
}


@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: Species })
    species: Species;

    @Column({ type: 'enum', enum: Classes })
    player_class: Classes;

    @Column()
    level: number;

    @ManyToMany(() => Armor, (armor) => armor.players)
    @JoinTable({ name: "armor_player" })
    armors: Armor[];
}