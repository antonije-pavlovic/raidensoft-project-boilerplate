import { body } from 'express-validator';
import validator from '../api/middlewares/validator';

export const validateUser = validator([
  body('age')
    .notEmpty()
    .isInt()
    .withMessage('Age is required')
]);