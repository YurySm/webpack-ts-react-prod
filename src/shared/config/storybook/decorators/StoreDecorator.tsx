import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';


const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer
}

export function StoreDecorator(state: Partial<StateSchema>, asyncReducers?: ReducersMapObject<StateSchema> ) {
	return (
	// eslint-disable-next-line react/display-name
		(Story: StoryFn) => (
			<StoreProvider initialState={ state } asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/* @ts-expect-error*/}
				<Story/>
			</StoreProvider>
		));
}
 