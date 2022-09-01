import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import UnprocessableError from '../../../errors/custom/unprocessable.error';

export default function validator(validatorsChain) {

  return async(req: Request, _res: Response, next: NextFunction) => {
    await Promise.all(validatorsChain.map(validation => validation.run(req)));
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      const formatedErrors = errors.array().map(error => {
        return {
          path: `${error.location}.${error.param}`,
          code: `${error.msg.split(' ').join('_')}`
        };
      });

      return next(new UnprocessableError(formatedErrors));
    }

    return next();
  };
}