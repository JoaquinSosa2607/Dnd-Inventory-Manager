import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Armor } from "./Armor";
import { Campaign } from "./Campaign";
import { User } from "./User";

export enum Species {
    Dragonborn = "Dracónido",
    Dwarf = "Enano",
    Elf = "Elfo",
    Gnome = "Gnomo",
    Half_Elf = "Semi Elfo",
    Halfling = "Mediano",
    Half_Orc = "Semi Orco",
    Human = "Humano",
    Tiefling = "Tiefling"
}

export enum Classes {
    Barbarian = "Bárbaro",
    Bard = "Bardo",
    Cleric = "Clérigo",
    Druid = "Druida",
    Fighter = "Peleador",
    Monk = "Monje",
    Paladin = "Paladín",
    Ranger = "Explorador",
    Rogue = "Pícaro",
    Sorcerer = "Mago",
    Warlock = "Brujo",
    Wizard = "Hechicero"
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

    @ManyToOne(() => Campaign, (campaign) => campaign.player)
    @JoinColumn({ name: "campaign_id"})
    campaign: Campaign;

    @ManyToOne(() => User, (user) => user.player)
    @JoinColumn({ name: "user_id"})
    user: User;
}