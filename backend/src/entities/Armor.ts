import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";

export enum TypeOfArmor {
    Light_Armor = "Light Armor",
    Medium_Armor = "Medium Armor",
    Heavy_Armor = "Heavy Armor",
    Shield = "Shield"
}

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
}