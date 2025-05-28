import { Router } from 'express';
import { createSale, deleteSaleById, editSaleById, getAllSales, getSaleById } from '../controllers/sales.controller.js';

const router = Router();

router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.post('/', createSale);
router.put('/:id', editSaleById);
router.delete('/:id', deleteSaleById);

export default router;
