import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const jsonPath = path.join(__dirname, "/data/houses.json");
const data = fs.readFileSync(jsonPath, 'utf8');
const houses = JSON.parse(data);

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "oi" });
})

app.get("/houses", (req, res) => {
    res.status(200).json(houses);
})

app.get("/houses/:id", (req, res) => {
    const houseId = req.params.id;
    const house = houses.houses.find(h => h.id == houseId);
    if (house) {
        res.status(200).json(house);
    } else {
        res.status(404).json({ message: "House not found" });
    }
});

export default app;