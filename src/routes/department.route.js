import { Router } from 'express';
import { createDepartment, deleteDepartmentById, editDepartmentById, getAllDepartments, getDepartmentById } from '../controllers/department.controller.js';

const router = Router();

router.get('/', getAllDepartments);
router.post('/', createDepartment);
router.get('/:id', getDepartmentById);
router.put('/:id', editDepartmentById);
router.delete('/:id', deleteDepartmentById);

export default router;
