import * as clienteService from '../services/clienteService.js';


// Aquí defines tus funciones para manejar las solicitudes
export const getClientes = async (req, res) => {
    try {
        const clientes = await clienteService.getClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const addCliente = async (req, res) => {
    try {
        const savedCliente = await clienteService.addCliente(req.body);
        res.status(201).json(savedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const updateCliente = async (req, res) => {
    try {
        const updatedCliente = await clienteService.updateCliente(req.params.id, req.body);
        res.json(updatedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const deleteCliente = async (req, res) => {
    try {
        await clienteService.deleteCliente(req.params.id);
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
