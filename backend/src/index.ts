import express from "express";
import { AppDataSource } from "./db";
import { PORT } from "./env";
import playerRoutes from "./routes/player.routes"
import armorRoutes from "./routes/armor.routes"
import authRoutes from "./routes/auth.routes"
const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/player", playerRoutes);
app.use("/armor", armorRoutes);

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected - MySQL");
        app.listen(PORT);
        console.log("Server on port", PORT);
    } catch (error) {
        console.log("Error. Connection to database lost");
        console.log(error);
    }
}

main();