import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/categories", categoryRoutes);
app.use("/api/clientes", clienteRoutes);


export default app;
