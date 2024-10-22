import express from "express";
import { AppDataSource } from "./db";
import { PORT } from "./env";
import playerRoutes from "./routes/player.routes"
const app = express();

app.use(express.json());

app.use("/player", playerRoutes);

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected - MySQL");
        app.listen(PORT)
    } catch (error) {
        console.log("Error. Connection to database lost");
        console.log(error);
    }
}

main();