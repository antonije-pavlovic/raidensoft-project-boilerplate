import { Request, Response } from 'express';
import UnprocessableError from '../../errors/custom/unprocessable.error';

export default class UserEndpoint {
  public static get(request: Request, response: Response) {
    throw new UnprocessableError();
    response.send(`body: ${request.body}`);
  }

  public static create(request: Request, response: Response) {
    console.log(request.params);
    response.send(`body: ${request.body}`);
  }

  public static update(request: Request, response: Response) {
    response.send(`body: ${request.body}`);
  }
}