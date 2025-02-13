import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import axios from 'axios';

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
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);

