import { Router } from "express";
import {
    getSedes,
    addSede,
    getSedeById,
    updateSede,
    deleteSede
} from "../controllers/sedeController.js";

const router = Router();

router.get("/", getSedes);
router.post("/", addSede);
router.get("/:id", getSedeById);
router.put("/:id", updateSede);
router.delete("/:id", deleteSede);

export default router;
