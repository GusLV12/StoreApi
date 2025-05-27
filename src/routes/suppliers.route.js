import { Router } from 'express';
import { createSupplier, deleteSupplierById, editSupplierById, getAllSuppliers, getSupplierById } from '../controllers/suppliers.controller.js';

const router = Router();

router.get('/', getAllSuppliers);
router.get('/:id', getSupplierById);
router.post('/', createSupplier);
router.put('/:id', editSupplierById);
router.delete('/:id', deleteSupplierById);

export default router;
