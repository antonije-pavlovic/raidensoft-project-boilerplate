type RepositoryGenericMappedType<T> = {
    [Property in keyof T]: T[Property];
}

export type FindParams<T> = RepositoryGenericMappedType<T>;

export type GetParams<T> = RepositoryGenericMappedType<T>;

export type RemoveParams<T> = RepositoryGenericMappedType<T>;

export type CreateParams<T> = RepositoryGenericMappedType<T>;

export type UpdateParams<T, K> = {
    filter: {
        [Property in keyof T]: T[Property];
    };
    update: {
        [Property in keyof K]: K[Property];
    }
}

