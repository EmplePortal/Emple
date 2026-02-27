import { Router } from 'express';

const router = Router();

// GET /api/dashboard
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Dashboard data',
    user: req.user, // comes from authMiddleware
  });
});

export default router;