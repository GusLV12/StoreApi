import { Router } from 'express';
import { createProductSale, deleteProductSaleById, getAllProductsSale, getProductSaleById } from '../controllers/productsSale.controller.js';

const router = Router();

router.get('/', getAllProductsSale);
router.get('/:id', getProductSaleById);
router.post('/', createProductSale);
router.delete('/:id', deleteProductSaleById);

export default router;
