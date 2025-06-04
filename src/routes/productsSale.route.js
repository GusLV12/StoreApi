import { Router } from 'express';
import { createProductSale, deleteProductSaleById, getAllProductsSale, getProductSaleById } from '../controllers/productsSale.controller.js';
import { authorizeRoles, verifyToken } from '../middlewares/auth.middleware.js';
import { Access } from '../utils/roles.js';

const router = Router();

router.get('/', verifyToken, authorizeRoles(...Access.ADMIN_AND_USER), getAllProductsSale);
router.get('/:id', verifyToken, authorizeRoles(...Access.ADMIN_AND_USER), getProductSaleById);
router.post('/', verifyToken, authorizeRoles(...Access.ADMIN_AND_USER), createProductSale);
router.delete('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), deleteProductSaleById);

export default router;
