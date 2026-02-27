import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';

const router = Router();

// GET /api/users
router.get('/', userController.getAllUsers);

export default router;