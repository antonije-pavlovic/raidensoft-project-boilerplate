import { ObjectId } from 'mongoose';
import { FindParams } from '../../repository/repository.models';

export interface IUser {
    _id: ObjectId;
    name: string;
    age: number;
}


export type UserGet = FindParams<Omit<IUser, 'age'>>;