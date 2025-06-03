import { Router } from 'express';
import { login, register } from '../../controllers/auth/auth.controller.js';
import { authorizeRoles, verifyToken } from '../../middlewares/auth.middleware.js';
import { Access } from '../../utils/roles.js';

const router = Router();

router.post('/register', verifyToken, authorizeRoles(...Access.ADMIN_ONLY), register);
router.post('/login', login);

export default router;
