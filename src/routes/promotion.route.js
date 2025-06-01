import { Router } from 'express';
import { createPromotion, deletePromotionById, getAllPromotions, getPromotionById, updatePromotionById } from '../controllers/promotion.controller.js';

const router = Router();

router.get('/', getAllPromotions);
router.get('/:id', getPromotionById);
router.post('/', createPromotion);
router.put('/:id', updatePromotionById);
router.delete('/:id', deletePromotionById);

export default router;
