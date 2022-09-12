import IRead from './interfaces/read.interface';

export default class ReadRepository<T> implements IRead<T> {

  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented');
  }

  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented');
  }

}