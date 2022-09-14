import { ObjectId } from 'mongoose';
import { FindParams } from '../../repository/repository.models';

export interface IUserDB {

    name: string;
    age: number;
}

export interface IUser extends IUserDB {
    _id: ObjectId
}

export type UserGet = FindParams<Omit<IUser, 'age'>>;