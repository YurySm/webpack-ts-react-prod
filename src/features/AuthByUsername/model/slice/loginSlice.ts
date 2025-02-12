import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
	username: '',
	password: '',
	isLoading: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, { payload }: PayloadAction<string>) => {
			state.username = payload;
		},
		setPassword: (state, { payload }: PayloadAction<string>) => {
			state.password = payload;
		},
	},
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
