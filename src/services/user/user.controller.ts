import { Request, Response } from 'express';
import UnprocessableError from '../../errors/custom/unprocessable.error';

export default class UserController {
  public static get(request: Request, response: Response) {
    throw new UnprocessableError();
    response.send(`body: ${request.body}`);
  }
}