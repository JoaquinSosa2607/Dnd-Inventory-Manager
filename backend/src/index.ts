import express from "express";
import { AppDataSource } from "./db";
import { PORT } from "./env";
const app = express();

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