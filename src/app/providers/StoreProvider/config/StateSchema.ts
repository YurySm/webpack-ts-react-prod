import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReplaceReducer {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce:  Reducer<StateSchema, Action>
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends  EnhancedStore<StateSchema> {
    reducerManager: ReplaceReducer
}
