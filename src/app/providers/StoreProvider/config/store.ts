import { Action, configureStore, ReducersMapObject, ThunkAction } from '@reduxjs/toolkit';
import type { StateSchema, ThunkExtraArgs } from './StateSchema';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { scrollSaveReducer } from 'widgets/ScrollSave';
import { rtkApi } from 'shared/api/rtkApi';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgs: ThunkExtraArgs = {
        api: $api,
    }

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArgs,
                },
            }).concat(rtkApi.middleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

const storeForTypes = createReduxStore({} as StateSchema);

// type StoreType = ReturnType<ReturnType<typeof createReduxStore>['getState']>

export type RootStates = ReturnType<typeof storeForTypes.getState>;
// export type RootState = ReturnType<
//     ReturnType<typeof createReduxStore>['getState']
// >;
export type RootState = ReturnType<typeof storeForTypes.getState>
export type AppDispatch = typeof storeForTypes.dispatch;
// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

