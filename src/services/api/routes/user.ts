import { Router } from 'express';
import UserController from '../../user/user.controller';
import catcheError from '../../../errors/catch-error';

const router = Router();

router.get('/', catcheError(UserController.get));

export default router;