import { connect } from 'http2';
import IWrite from './interfaces/write.interface';


export default class BaseRepository<T> implements IWrite<T>{
  conststrun() {
    const conn = Obejct;

  }
  create(item: T): Promise<T> {
    connect.create(item)
    throw new Error('Method not implemented');
  }

  update(id: string, item: T): Promise<T> {
    throw new Error('Method not implemented');
  }

  delete(id: string): boolean {
    throw new Error('Method not implemented');
  }
}