/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */

import { MongooseOptions } from 'mongoose';
import ConflictError from '../errors/custom/conflict.error';
import NotFoundError from '../errors/custom/not.found';
import UnprocessableError from '../errors/custom/unprocessable.error';

export default class BaseRepository {

  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  // TODO: Log the error
  protected async _create(doc: any | any[], options?: MongooseOptions) {
    try {
      return await this.model.create(doc, options);
    } catch (error) {
      if(error.code === 11000) {
        throw new ConflictError();
      }

      if(error.name === 'ValidationError') {
        throw new UnprocessableError({
          kind: error.errors.kind,
          path: error.errors.path,
          value: error.errors.value,
        });
      }
    }
  }

  /**
   * We set options `new` property to true, to return the document after update was applied.
   */
  protected async update(filter: any, params: any,  options?: any): Promise<any> {
    try {
      if (options) {
        options.new = true;
      } else {
        options = { new: true };
      }

      const result = await this.model.findOneAndUpdate(filter, params, options).lean();

      if (!result) {
        throw new NotFoundError(filter);
      }
    } catch(error) {
      // TODO: Log the error and transform to https error
    }
  }

  protected async _delete(filter: any, options?: MongooseOptions) {
    try {
      const result = await this.model.findOneAndDelete(filter, options).lean();
      if (!result) {
        throw new NotFoundError(filter);
      }
      return result;

    } catch(error) {
      // TODO: Log the error and transform to https error
    }
  }

  protected async _find(filter: any, options?: MongooseOptions) {
    try {
      return await this.model.find(filter, options).lean();

    } catch(error) {
      // TODO: TODO: Log the error and transform to https error
    }
  }

  protected async _get(filter: any, options?: MongooseOptions) {
    try {
      const invalidValues: any[] = [];

      for(const prop in filter) {
        if(filter[prop] === null || filter[prop] === undefined) {
          invalidValues.push({ prop, value: filter[prop] })
        }
      }

      if (invalidValues.length) {
        throw new ConflictError(invalidValues);
      }

      const result = await this.model.findOne(filter, options).lean();

      if(!result) {
        return null;
      }

      return result;

    } catch(error) {
      // TODO: TODO: Log the error and transform to https error
    }
  }
}