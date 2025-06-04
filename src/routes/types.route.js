// Rutas para gestionar los tipos de producto (Type), que representan subcategorías
// dentro de un departamento, como Refresco, Botana, Aseo personal, etc.
import { Router } from 'express';
import { createType, deleteTypeById, editTypeById, getAllTypes, getTypeById } from '../controllers/types.controller.js';
import { authorizeRoles, verifyToken } from '../middlewares/auth.middleware.js';
import { Access } from '../utils/roles.js';

const router = Router();

router.get('/', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), getAllTypes);
router.get('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), getTypeById);
router.post('/', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), createType);
router.put('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), editTypeById);
router.delete('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), deleteTypeById);

export default router;
