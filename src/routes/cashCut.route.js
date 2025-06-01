import express from 'express';
import {
  getAllCashCuts,
  getCashCutById,
  createCashCut,
  deleteCashCutById
} from '../controllers/cashCut.controller.js';

const router = express.Router();

router.get('/', getAllCashCuts);
router.get('/:id', getCashCutById);
router.post('/', createCashCut);
router.delete('/:id', deleteCashCutById);

export default router;
