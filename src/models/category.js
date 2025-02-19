import { model, Schema } from 'mongoose';
import SpecimenSchema from './specimen.js';

// Definir el esquema para Categorías
const CategorySchema = new Schema({
    nameCategory: {
        type: String,
        required: [false] //'The field name is required'],
       // minLength: [4, 'Min 4 characters'],
    },
    specimens: [SpecimenSchema]  // Relación con Specimens
}, { 
    versionKey: false, 
    toJSON: { virtuals: true },  
    toObject: { virtuals: true }  
 });

export default model('Category', CategorySchema, 'category');
