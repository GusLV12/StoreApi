// Rutas para gestionar los tipos de producto (Type), que representan subcategorías
// dentro de un departamento, como Refresco, Botana, Aseo personal, etc.
import { Router } from 'express';
import { createType, deleteTypeById, editTypeById, getAllTypes, getTypeById } from '../controllers/types.controller.js';

const router = Router();

router.get('/', getAllTypes);
router.get('/:id', getTypeById);
router.post('/', createType);
router.put('/:id', editTypeById);
router.delete('/:id', deleteTypeById);

export default router;
