import * as sedeService from "../services/sedeService.js";

export const getSedes = async (req, res) => {
    try {
        const sedes = await sedeService.listSedes();
        res.json(sedes);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las sedes" });
    }
};

export const addSede = async (req, res) => {
    try {
        const sede = await sedeService.addSede(req.body);
        res.status(201).json(sede);
    } catch (error) {
        res.status(400).json({ message: "Error al añadir la sede", error });
    }
};

export const getSedeById = async (req, res) => {
    try {
        const sede = await sedeService.findSede(req.params.id);
        if (!sede) return res.status(404).json({ message: "Sede no encontrada" });
        res.json(sede);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la sede" });
    }
};

export const updateSede = async (req, res) => {
    try {
        const sede = await sedeService.modifySede(req.params.id, req.body);
        if (!sede) return res.status(404).json({ message: "Sede no encontrada" });
        res.json(sede);
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar la sede" });
    }
};

export const deleteSede = async (req, res) => {
    try {
        const sede = await sedeService.removeSede(req.params.id);
        if (!sede) return res.status(404).json({ message: "Sede no encontrada" });
        res.json({ message: "Sede eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la sede" });
    }
};
