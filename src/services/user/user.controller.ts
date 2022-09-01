import { Request, Response } from 'express';

export default class UserController {
  public static get(request: Request, response: Response) {
    response.send(`body: ${request.body}`);
  }
}