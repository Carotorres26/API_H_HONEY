import * as categoryRepo from '../repositories/categoryRepository.js';

export const getCategories = async () => {
    return await categoryRepo.getAllCategories();
};

export const getSpecimenByName = async (name) => {
    return await categoryRepo.getCategoryBySpecimenName(name);
};

export const insertCategory = async (categoryData) => {
    return await categoryRepo.createCategory(categoryData);
};

export const addSpecimen = async (categoryId, specimen) => {
    const category = await categoryRepo.findCategoryById(categoryId);
    if (!category) throw new Error('Category not found');

    return await categoryRepo.addSpecimenToCategory(category, specimen);
};

export const editSpecimen = async (categoryId, specimenId, updatedSpecimen) => {
    const category = await categoryRepo.findCategoryById(categoryId);
    if (!category) throw new Error('Category not found');

    return await categoryRepo.updateSpecimenInCategory(category, specimenId, updatedSpecimen);
};

export const moveSpecimen = async (fromCategoryId, toCategoryId, specimenId) => {
    const fromCategory = await categoryRepo.findCategoryById(fromCategoryId);
    if (!fromCategory) throw new Error('Source category not found');

    const specimen = fromCategory.specimens.id(specimenId);
    if (!specimen) throw new Error('Specimen not found in source category');

    await categoryRepo.removeSpecimenFromCategory(fromCategory, specimenId);

    const toCategory = await categoryRepo.findCategoryById(toCategoryId);
    if (!toCategory) throw new Error('Destination category not found');

    return await categoryRepo.addSpecimenToCategory(toCategory, specimen);
};
