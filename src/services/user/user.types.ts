import { ObjectId } from 'mongoose';

export interface IUser {
    _id: ObjectId;
    name: string;
    age: number;
}

export interface UserRemove {
    _id: ObjectId
}

export interface UserFind {
    name?: string;
    age?: number;
}

// export type UserFind = FindParams<Omit<IUser, 'age'>>;