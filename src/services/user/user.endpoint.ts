import { Request, Response } from 'express';
import UserService from './user.service';

export default class UserEndpoint {

  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  public async create(request: Request, response: Response) {
    const newUser = await this.userService.create(request.body);
    response.status(200).json(newUser);
  }

  public get(request: Request, response: Response) {
    response.send(`body: ${request.body}`);
  }

}