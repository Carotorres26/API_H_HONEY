import Category from '../models/category.js';

export const getAllCategories = async () => {
    return await Category.find();
};

export const getCategoryBySpecimenName = async (name) => {
    return await Category.find({ "specimens.name": name }, { "specimens.$": 1 });
};

export const createCategory = async (categoryData) => {
    const category = new Category(categoryData);
    return await category.save();
};

export const findCategoryById = async (categoryId) => {
    return await Category.findById(categoryId);
};

export const addSpecimenToCategory = async (category, specimen) => {
    category.specimens.push(specimen);
    return await category.save();
};

export const updateSpecimenInCategory = async (category, specimenId, updatedSpecimen) => {
    const specimen = category.specimens.id(specimenId);
    if (specimen) {
        Object.assign(specimen, updatedSpecimen);
        return await category.save();
    }
    return null;
};

export const removeSpecimenFromCategory = async (category, specimenId) => {
    category.specimens.pull(specimenId);
    return await category.save();
};
