import { Router } from 'express';
import {
  getAllProductChanges,
  getProductChangeById,
  createProductChange,
  deleteProductChangeById
} from '../controllers/productChange.controller.js';

const router = Router();

router.get('/', getAllProductChanges);
router.get('/:id', getProductChangeById);
router.post('/', createProductChange);
router.delete('/:id', deleteProductChangeById);

export default router;
