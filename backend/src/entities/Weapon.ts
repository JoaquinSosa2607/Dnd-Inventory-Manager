import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TypeOfWeapon {
    Simple = "Simple",
    Distance_Simple = "Distance, Simple",
    Martial = "Martial",
    Distance_Martial = "Distance, Martial"
}

@Entity()
export class Weapon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: TypeOfWeapon })
    type: TypeOfWeapon;

    @Column()
    damage: string;

}