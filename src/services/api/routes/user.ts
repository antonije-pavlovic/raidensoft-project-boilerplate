import { Router } from 'express';
import UserController from '../../user/user.controller';
import catcheError from '../../../errors/catch-error';
import { validateUser } from '../../user/user.validate';

// TODO: Should we create class for this file UserRoute

const router = Router();

router.get('/',
  catcheError(UserController.get)
);

router.post('/',
  validateUser,
  catcheError(UserController.create)
);

router.put('/:id',
  catcheError(UserController.update)
);

export default router;