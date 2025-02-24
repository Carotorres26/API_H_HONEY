import { Router } from 'express';
import * as clienteController from '../controllers/clienteController.js';

const router = Router();

// Definir las rutas
router.get('/', clienteController.getClientes); // Obtener todos los clientes
router.post('/', clienteController.addCliente); // Añadir un nuevo cliente
router.put('/:id', clienteController.updateCliente); // Actualizar un cliente por ID
router.delete('/:id', clienteController.deleteCliente); // Eliminar un cliente por ID

export default router; // Asegúrate de exportar el router como default
