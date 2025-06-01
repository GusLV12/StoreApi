import { Router } from 'express';
import { createCredit, deleteCreditById, getAllCredits, getCreditById, updateCreditById } from '../controllers/credits.controller.js';

const router = Router();

router.get('/', getAllCredits);
router.get('/:id', getCreditById);
router.post('/', createCredit);
router.put('/:id', updateCreditById);
router.delete('/:id', deleteCreditById);

export default router;
