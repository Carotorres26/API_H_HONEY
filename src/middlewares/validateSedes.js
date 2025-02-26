import { sedeExists } from "../repositories/sedeRepository.js";

export const validateSede = async (req, res, next) => {
    const { NombreSede } = req.body;

    try {
        const exists = await sedeExists(NombreSede);
        if (exists) {
            return res.status(400).json({ message: 'Sede with this name already exists' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};
