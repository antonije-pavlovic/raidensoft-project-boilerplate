import { Request, Response, NextFunction } from 'express';

export default function catchErrors(handler, object) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      return handler.call(object, req, res);
    } catch(error) {
      return next(error);
    }
  };
}