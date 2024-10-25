import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";
import { Armor } from "./Armor";

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => Character, (character) => character.campaign)
    character: Character[];

    @OneToMany(() => Armor, (armor) => armor.campaign)
    armor: Armor[];
}