import { Router } from 'express';
import { createProduct, deleteProductById, editProductById, getAllProducts, getProductById } from '../controllers/products.controller.js';
import { authorizeRoles, verifyToken } from '../middlewares/auth.middleware.js';
import { Access } from '../utils/roles.js';

const router = Router();

router.get('/', verifyToken, authorizeRoles(...Access.ADMIN_AND_USER), getAllProducts);
router.post('/', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), createProduct);
router.get('/:id', verifyToken, authorizeRoles(...Access.ADMIN_AND_USER), getProductById);
router.put('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), editProductById);
router.delete('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), deleteProductById);

export default router;
