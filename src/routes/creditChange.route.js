import { Router } from 'express';
import {
  getAllCreditChanges,
  getCreditChangeById,
  createCreditChange,
  updateCreditChange,
  deleteCreditChange
} from '../controllers/creditChange.controller.js';

const router = Router();

router.get('/', getAllCreditChanges);
router.get('/:id', getCreditChangeById);
router.post('/', createCreditChange);
router.put('/:id', updateCreditChange);
router.delete('/:id', deleteCreditChange);

export default router;
