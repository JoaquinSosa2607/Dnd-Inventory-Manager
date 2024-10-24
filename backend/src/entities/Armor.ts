import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";
import { Campaign } from "./Campaign";
import { TypeOfArmor } from "../helpers/enums";

@Entity()
export class Armor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: TypeOfArmor})
    type: TypeOfArmor;

    @Column()
    AC: string;

    @Column()
    strength: string;

    @Column()
    stealth: string; 

    @ManyToMany(() => Player, (player) => player.armors)
    players: Player[]; 

    @ManyToOne(() => Campaign, (campaign) => campaign.armor)
    @JoinColumn({ name: "campaign_id"})
    campaign: Campaign;
}
