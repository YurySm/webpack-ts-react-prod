import { Action, configureStore, ReducersMapObject, ThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware()
	})

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

// const storeForTypes = createReduxStore({} as StateSchema);

// type StoreType = ReturnType<ReturnType<typeof createReduxStore>['getState']>

// export type RootStates = ReturnType<typeof storeForTypes.getState>;
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>
// export type AppDispatch = typeof storeForTypes.dispatch;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = () => useDispatch<AppDispatch>();


