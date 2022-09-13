import { MongooseOptions } from 'mongoose';
import BaseRepository from '../../repository/base.repository';
import { IUser, UserGet } from './user.types';

export default class UserRepository extends BaseRepository {

  public async create(doc: IUser, options?: MongooseOptions) {
    return await super._create(doc, options);
  }

  public async get(filter: UserGet, options?: MongooseOptions) {
    return await super._get(filter, options);
  }

}