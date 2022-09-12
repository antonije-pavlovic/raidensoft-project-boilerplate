import { FindParams, GetParams } from './repository.models';

export default interface IRead<T, F, G> {
    find(filter: FindParams<F>): Promise<T[]>;
    get(filter: GetParams<G>): Promise<T>;
}