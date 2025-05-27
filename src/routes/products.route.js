import { Router } from 'express';
import { createProduct, deleteProductById, editProductById, getAllProducts, getProductById } from '../controllers/products.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', editProductById);
router.delete('/:id', deleteProductById);

export default router;
