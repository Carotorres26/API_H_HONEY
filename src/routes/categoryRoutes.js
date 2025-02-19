import express from 'express';
import * as categoryController from '../controllers/categoryController.js';
//import { validateCategory } from '../middlewares/validateCategory.js';
import { validateSpecimen } from '../middlewares/validateSpecimen.js';
import { validateCategoryDeletion } from '../middlewares/validateCategory.js';

const router = express.Router();

router.get('/', categoryController.getCategory);
router.get('/specimen/:name', categoryController.getSpecimenByName);
router.post('/', categoryController.postCategory);
router.put('/:id', categoryController.updateCategory); 
router.delete('/:id', validateCategoryDeletion, categoryController.deleteCategory); 
router.post('/specimen', validateSpecimen, categoryController.addSpecimen);
router.put('/specimen', categoryController.editSpecimen);
router.put('/specimen/move', categoryController.moveSpecimen);

export default router;
//router.post('/', validateCategory, categoryController.postCategory);
