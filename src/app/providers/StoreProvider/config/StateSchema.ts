import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    Action,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentFrom?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReplaceReducer {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: Reducer<StateSchema, Action>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReplaceReducer;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T>  {
    rejectValue: T;
    extra: ThunkExtraArgs;
    state: StateSchema
}
