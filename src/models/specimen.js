import { Schema } from 'mongoose';

// Definir el esquema de Specimen (Ejemplares)
const SpecimenSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required'],
    },
    birthDate: {
        type: Date,
        required: [true, 'The birth date is required'],
    },
    paso: {
        type: String,
        required: [true, 'The paso is required'],
    },
    color: {
        type: String,
        required: [true, 'The color is required'],
    },
    owner: {
        type: String,
        required: [true, 'The owner is required'],
    },
    cedula: {
        type: String,
        required: [true, 'The cedula is required'],
        minLength: [10, 'Min 10 characters'],
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
    } 
}, { 
    versionKey: false 
});

// Virtual para calcular la edad en meses
SpecimenSchema.virtual('ageInMonths').get(function () {
    const today = new Date();
    const birthDate = new Date(this.birthDate);

    let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12;
    ageInMonths += today.getMonth() - birthDate.getMonth();

    if (today.getDate() < birthDate.getDate()) {
        ageInMonths--;
    }

    return ageInMonths;
});

export default SpecimenSchema;
