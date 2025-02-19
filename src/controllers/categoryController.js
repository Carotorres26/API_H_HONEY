import * as categoryService from '../services/categoryService.js';

export const getCategory = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.json({ categories });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSpecimenByName = async (req, res) => {
    try {
        const specimens = await categoryService.getSpecimenByName(req.params.name);
        if (!specimens.length) {
            return res.status(404).json({ msg: 'Specimen not found' });
        }
        res.json(specimens.map(category => category.specimens[0].toJSON()));
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching specimen', error: error.message });
    }
};

export const postCategory = async (req, res) => {
    try {
        await categoryService.insertCategory(req.body);
        res.status(201).json({ msg: 'Category inserted successfully' });
    } catch (error) {
        res.status(400).json({ msg: 'Error inserting category', error: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        res.json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
};

export const addSpecimen = async (req, res) => {
    try {
        const { categoryId, specimen } = req.body;
        const category = await categoryService.addSpecimen(categoryId, specimen);
        res.json({ msg: 'Specimen added successfully', category });
    } catch (error) {
        res.status(500).json({ msg: 'Error adding specimen', error: error.message });
    }
};

export const editSpecimen = async (req, res) => {
    try {
        const { categoryId, specimenId, updatedSpecimen } = req.body;
        const category = await categoryService.editSpecimen(categoryId, specimenId, updatedSpecimen);
        res.json({ msg: 'Specimen updated successfully', category });
    } catch (error) {
        res.status(500).json({ msg: 'Error updating specimen', error: error.message });
    }
};

export const moveSpecimen = async (req, res) => {
    try {
        const { fromCategoryId, toCategoryId, specimenId } = req.body;
        const result = await categoryService.moveSpecimen(fromCategoryId, toCategoryId, specimenId);
        res.json({ msg: 'Specimen moved successfully', result });
    } catch (error) {
        res.status(500).json({ msg: 'Error moving specimen', error: error.message });
    }
};
