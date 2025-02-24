import Category from '../models/category.js'

export const validateCategoryDeletion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id).populate('specimens'); // Buscar categoría con ejemplares

        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        if (category.specimens.length > 0) {
            return res.status(400).json({ error: 'No puedes eliminar una categoría con ejemplares asignados' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Error en la validación de la categoría' });
    }
};

// export const validateCategory = (req, res, next) => {
//     const { nameCategory } = req.body;
//     if (!nameCategory || nameCategory.length < 4) {
//         return res.status(400).json({ msg: 'Category name must be at least 4 characters long' });
//     }
//     next();
// };