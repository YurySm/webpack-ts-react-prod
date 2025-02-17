import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: Partial<StateSchema>;
	asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({
	children,
	initialState,
	asyncReducers
}: StoreProviderProps) => {
	const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

	return (
		<Provider store={ store }>
			{children}
		</Provider>
	);
};
