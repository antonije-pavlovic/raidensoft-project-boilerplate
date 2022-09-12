import { Model } from 'mongoose';
import IRead from './interfaces/read.interface';
import IWrite from './interfaces/write.interface';

export default abstract class BaseRepository<T, K, J, R, F, G> implements IWrite<T, K, J, R>, IRead<T, F, G> {
  protected model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  async create(item: T): Promise<T> {
    return await this.model.create(item);
  }

  async update(id: string, item: T): Promise<T> {
    return this.model.updateOne()
  }

  async delete(id: string): boolean {
    throw new Error('Method not implemented');
  }

  async find(item: T): Promise<T[]> {
    throw new Error('Method not implemented');
  }

  async indOne(id: string): Promise<T> {
    throw new Error('Method not implemented');
  }

}