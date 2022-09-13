import { Router } from 'express';
import UserEndpoint from '../../user/user.endpoint';
import catcheError from '../../../errors/catch.error';
import { validateUser } from '../../user/user.validate';

// TODO: Maybe this should be singleton
class UserRoute {
  public router: Router;
  private userEndpoint: UserEndpoint;

  constructor() {
    this.router = Router();
    this.userEndpoint = new UserEndpoint();
  }

  public registerRoutes() {

    this.router.get('/',
      catcheError(this.userEndpoint.get)
    );

    this.router.post('/',
      validateUser,
      catcheError(this.userEndpoint.create)
    );
    return this.router;
  }
}

const userRoute = new UserRoute();

export default userRoute;
