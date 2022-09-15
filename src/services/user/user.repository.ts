import { MongooseOptions } from 'mongoose';
import BaseRepository from '../../repository/base.repository';
import { DeleteUser, IUser, IUserDB, UpdateUser, UserGet } from './user.types';

export default class UserRepository extends BaseRepository {

  public async create(doc: IUserDB, options?: MongooseOptions): Promise<IUser> {
    return await super._create(doc, options);
  }

  public async get(filter: UserGet, options?: MongooseOptions): Promise<IUser>{
    return await super._get(filter, options);
  }

  public async update(params: UpdateUser, options?: MongooseOptions): Promise<IUser> {
    return await this._update(params.filter, params.update, options);
  }

  public async delete(filter: DeleteUser, options?: MongooseOptions): Promise<IUser> {
    return await this._delete(filter, options);
  }
}