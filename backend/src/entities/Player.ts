import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Armor } from "./Armor";
import { Campaign } from "./Campaign";
import { User } from "./User";
import { Classes, Species } from "../helpers/enums";


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
