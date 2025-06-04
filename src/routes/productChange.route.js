import { Router } from 'express';
import {
  getAllProductChanges,
  getProductChangeById,
  createProductChange,
  deleteProductChangeById
} from '../controllers/productChange.controller.js';
import { authorizeRoles, verifyToken } from '../middlewares/auth.middleware.js';
import { Access } from '../utils/roles.js';

const router = Router();

router.get('/', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), getAllProductChanges);
router.get('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), getProductChangeById);
router.post('/', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), createProductChange);
router.delete('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), deleteProductChangeById);

export default router;
