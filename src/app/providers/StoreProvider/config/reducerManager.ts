import {
    Action,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { MountedReducers, ReplaceReducer, StateSchema, StateSchemaKeys } from './StateSchema';
import { UserSchema } from '@/entities/User';
import { CounterSchema } from '@/entities/Counter';

type StateSchemaType = Partial<{
    counter: CounterSchema | undefined;
    user: UserSchema | undefined;
    loginForm?: undefined;
    profile?: undefined;
}>

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReplaceReducer {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKeys[] = [];

    const mountedReducers: MountedReducers = {}

    return {
        getReducerMap: () => reducers,

        getMountedReducers: () => mountedReducers,

        reduce: (state: StateSchema | undefined, action: Action) => {
            if (keysToRemove.length > 0) {
                if(state) {
                    state = { ...state };

                    for (const key of keysToRemove) {
                        delete state[key];
                    }
                }

                keysToRemove = [];
            }

            return combinedReducer(state as StateSchemaType, action);
        },

        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            mountedReducers[key] = true

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);
            mountedReducers[key] = false

            combinedReducer = combineReducers(reducers);
        },
    };
}
