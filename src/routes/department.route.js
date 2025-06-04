import { Router } from 'express';
import { createDepartment, deleteDepartmentById, editDepartmentById, getAllDepartments, getDepartmentById } from '../controllers/department.controller.js';
import { authorizeRoles, verifyToken } from '../middlewares/auth.middleware.js';
import { Access } from '../utils/roles.js';

const router = Router();

router.get('/', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), getAllDepartments);
router.post('/', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), createDepartment);
router.get('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), getDepartmentById);
router.put('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), editDepartmentById);
router.delete('/:id', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), deleteDepartmentById);

export default router;
