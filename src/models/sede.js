import mongoose from 'mongoose';

const { Schema } = mongoose;

const sedeSchema = new Schema({
    NombreSede: {
        type: String,
        required: true
    }
});

const Sede = mongoose.model('Sede', sedeSchema);
export default Sede;