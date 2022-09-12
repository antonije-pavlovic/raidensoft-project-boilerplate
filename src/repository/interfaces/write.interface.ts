import { CreateParams, RemoveParams, UpdateParams } from './repository.models';

export default interface IWrite<T, K, J, R> {
    create(item: CreateParams<T>): Promise<T>;
    update(params: UpdateParams<K, J>): Promise<T>;
    delete(filer: RemoveParams<R>): boolean;
}
