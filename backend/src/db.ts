import dotenv from "dotenv"
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PORT, DB_USER, MYSQL_PASSW, PORT } from "./env";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    username: DB_USER,
    password: MYSQL_PASSW,
    port: DB_PORT,
    database: DB_NAME,
    entities: [],
    logging: true,
    synchronize: true
});