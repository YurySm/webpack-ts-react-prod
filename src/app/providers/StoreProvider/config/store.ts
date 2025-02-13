import { Action, configureStore, ReducersMapObject, ThunkAction } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

export function createReduxStore(initialState: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};
	return configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware()
	});
}

const storeForTypes = createReduxStore({} as StateSchema);

export type RootState = ReturnType<typeof storeForTypes.getState>;
export type AppDispatch = typeof storeForTypes.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = () => useDispatch<AppDispatch>();
