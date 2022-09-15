import { Router } from 'express';
import UserEndpoint from '../../user/user.endpoint';
import catchErrors from '../../../errors/catch.error';
import { validateUser } from '../../user/user.validate';

class UserRoute {
  public router: Router;
  private userEndpoint: UserEndpoint;

  constructor() {
    this.router = Router();
    this.userEndpoint = new UserEndpoint();
  }

  public registerRoutes() {

    this.router.get('/',
      catchErrors(this.userEndpoint.get, this.userEndpoint)
    );

    this.router.post('/',
      validateUser,
      catchErrors(this.userEndpoint.create, this.userEndpoint)
    );

    this.router.put('/',
      catchErrors(this.userEndpoint.update, this.userEndpoint)
    );

    this.router.delete('/',
      catchErrors(this.userEndpoint.delete, this.userEndpoint)
    );

    return this.router;
  }
}

const userRoute = new UserRoute();

export default userRoute;
