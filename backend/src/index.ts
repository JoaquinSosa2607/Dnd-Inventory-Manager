import { AppDataSource } from "./db";
import { PORT } from "./env";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import playerRoutes from "./routes/player.routes"
import armorRoutes from "./routes/armor.routes"
import authRoutes from "./routes/auth.routes"
const app = express();


const corsOptions = {
    origin: ['http://localhost:4040', 'http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'auth-header','access-user-header'], 
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

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