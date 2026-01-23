import { Router } from "express";

import authRoutes from './modules/auth/auth.routes.js'
import articlesRoutes from './routes/articles.routes.js';

const router = Router();

router.use(authRoutes);

router.use('/articles', articlesRoutes);

export default router;