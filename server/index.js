import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "./routes/admin.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", admin);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Admin API running on ${PORT}`));
