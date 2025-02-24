import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import sedeRoutes from "./routes/sedeRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/categories", categoryRoutes);
app.use("/api/sedes", sedeRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

export default app;
