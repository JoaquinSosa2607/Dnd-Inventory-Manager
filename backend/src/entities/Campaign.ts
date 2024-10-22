import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";
import { Armor } from "./Armor";

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => Player, (player) => player.campaign)
    player: Player[];

    @OneToMany(() => Armor, (armor) => armor.campaign)
    armor: Armor[];
}