import { FindParams } from '../../repository/interfaces/repository.models';

export interface IUser {
    name: string;
    age: number;
}

export type UserFind = FindParams<Omit<IUser, 'age'>>;