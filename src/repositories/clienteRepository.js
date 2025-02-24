import Cliente from '../models/cliente.js';

export const getAllClientes = async () => {
    return await Cliente.find();
};

export const createCliente = async (clienteData) => {
    const cliente = new Cliente(clienteData);
    return await cliente.save();
};

export const updateCliente = async (id, clienteData) => {
    return await Cliente.findByIdAndUpdate(id, clienteData, { new: true });
};

export const deleteCliente = async (id) => {
    return await Cliente.findByIdAndDelete(id);
};

export const findClienteByCedula = async (cedula) => {
    return await Cliente.findOne({ cedula });
};
