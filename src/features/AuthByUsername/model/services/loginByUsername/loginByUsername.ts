import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
	'loginForm/loginByUsername',
	async (data, thunkAPI) => {
		try {
			const response = await axios.post<User>('http://localhost:5000/login', data);

			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
			thunkAPI.dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);

