import {
    getAllSedes,
    getSedeById,
    createSede,
    updateSede,
    deleteSede
} from "../repositories/sedeRepository.js";

export const listSedes = async () => await getAllSedes();
export const findSede = async (id) => await getSedeById(id);
export const addSede = async (sedeData) => await createSede(sedeData);
export const modifySede = async (id, sedeData) => await updateSede(id, sedeData);
export const removeSede = async (id) => await deleteSede(id);
