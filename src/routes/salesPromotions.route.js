import { Router } from 'express';
import { createSalesPromotion, deleteSalesPromotionById, getAllSalesPromotions } from '../controllers/salesPromotions.controller.js';

const router = Router();

router.get('/', getAllSalesPromotions);
router.post('/', createSalesPromotion);
router.delete('/:id', deleteSalesPromotionById);

export default router;
