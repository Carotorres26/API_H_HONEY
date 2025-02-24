import * as clienteRepo from '../repositories/clienteRepository.js';

export const getClientes = async () => {
    try {
        return await clienteRepo.getAllClientes();
    } catch (error) {
        throw new Error('Error al obtener los clientes');
    }
};

export const addCliente = async (clienteData) => {
    try {
        const clienteExiste = await clienteRepo.findClienteByCedula(clienteData.cedula);
        if (clienteExiste) {
            throw new Error('Cliente con cédula ya existe');
        }
        return await clienteRepo.createCliente(clienteData);
    } catch (error) {
        throw error;
    }
};

export const updateCliente = async (id, clienteData) => {
    try {
        const updatedCliente = await clienteRepo.updateCliente(id, clienteData);
        if (!updatedCliente) {
            throw new Error('Cliente no encontrado');
        }
        return updatedCliente;
    } catch (error) {
        throw error;
    }
};

export const deleteCliente = async (id) => {
    try {
        const deletedCliente = await clienteRepo.deleteCliente(id);
        if (!deletedCliente) {
            throw new Error('Cliente no encontrado');
        }
        return deletedCliente;
    } catch (error) {
        throw error;
    }
};
