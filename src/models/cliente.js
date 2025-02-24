import { Schema, model } from 'mongoose';

const clienteSchema = new Schema({
  Nombre: { type: String, required: true },
  TypeDocument: { type: String, required: true },
  Document: { type: String, required: true, unique: true },
  Correo: { type: String, required: true },
  Celular: { type: String, required: true },
  Nejemplares: { type: String, required: true },
  id: { type: Number, unique: true }, // Agregar este campo
  //agrega estado
  estado: { type: Boolean, required: true, default: true },
  //agrega fecha de creacion
});

// Middleware para generar id
clienteSchema.pre('save', async function(next) {
  try {
    const lastCliente = await this.constructor.findOne().sort({ id: -1 });
    this.id = lastCliente ? lastCliente.id + 1 : 1;
    next();
  } catch (err) {
    next(err);
  }
});

export default model('Cliente', clienteSchema, 'cliente');
