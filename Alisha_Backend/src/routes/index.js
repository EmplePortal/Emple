import { Router } from 'express';
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';
import dashboardRoutes from './dashboard.routes.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.use('/auth', authRoutes);        // /api/auth/...
router.use('/users', userRoutes);       // /api/users/...
router.use('/dashboard', authMiddleware, dashboardRoutes); // protected

export default router;