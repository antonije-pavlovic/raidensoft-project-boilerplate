import { Router } from 'express';

// Import all routes
import userRoute from './user';

const router = Router();

router.use('/user', userRoute);

export default router;
