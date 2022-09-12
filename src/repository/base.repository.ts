/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyParamConstructor, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { MongooseOptions } from 'mongoose';

export default class BaseRepository<T extends AnyParamConstructor<any>> {

  protected model: ReturnModelType<T>;

  constructor(model: ReturnModelType<T>) {
    this.model = model;
  }

  protected async create(doc: T): Promise<T> {
    return await this.model.create(doc);
  }

  protected async update(filter: any, params: any,  options?: MongooseOptions): Promise<T> {
    return await this.model.findOneAndUpdate(filter, params, options).lean();
  }

  protected async delete(filter: any, options?: MongooseOptions): Promise<boolean> {
    return await this.model.findOneAndDelete(filter, options).lean();
  }

  protected async find(filter: any, options: MongooseOptions): Promise<T[]> {
    return await this.model.find(filter, options).lean();
  }

  protected async get(filter: any, options: MongooseOptions): Promise<T> {
    return await this.model.findOne(filter, options).lean();
  }
}