import dotenv from "dotenv"
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PORT, DB_USER, MYSQL_PASSW, PORT } from "./env";
import { Player } from "./entities/Player";
import { Armor } from "./entities/Armor";
import { Weapon } from "./entities/Weapon";
import { Campaign } from "./entities/Campaign";
import { User } from "./entities/User";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    username: DB_USER,
    password: MYSQL_PASSW,
    port: DB_PORT,
    database: DB_NAME,
    entities: [
        Player,
        Armor,
        Weapon,
        Campaign,
        User
    ],
    logging: true,
    synchronize: true
});