import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./Player";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column({ default: "USER_ROLE" })
    role: string;

    @Column({ type: 'mediumtext', nullable: true })
    refreshToken: string;

    @Column({ nullable: true })
    resetPasswordToken: string;

    @OneToMany(() => Player, (player) => player.user)
    player: Player[];
}