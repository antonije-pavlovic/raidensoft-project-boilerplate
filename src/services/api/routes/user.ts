import { Router } from 'express';
import UserEndpoint from '../../user/user.endpoint';
import catcheError from '../../../errors/catch.error';
import { validateUser } from '../../user/user.validate';

// TODO: Should we create class for this file UserRoute

const router = Router();

router.get('/',
  catcheError(UserEndpoint.get)
);

router.post('/',
  validateUser,
  catcheError(UserEndpoint.create)
);

router.put('/:id',
  catcheError(UserEndpoint.update)
);

export default router;