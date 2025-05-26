import { Router } from 'express';
import { createProduct, deleteProductById, getAllProducts, getProductById } from '../controllers/products.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProductById);

export default router;
