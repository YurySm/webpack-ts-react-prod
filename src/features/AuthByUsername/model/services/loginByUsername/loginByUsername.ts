import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';
import { AppRoutes, RoutesPaths } from 'shared/config/routeConfig/routeConfig';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
	'loginForm/loginByUsername',
	async (
		data, {
			extra,
			dispatch,
			rejectWithValue
		}) => {
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			const response = await extra.api.post<User>('/login', data);

			// for example

			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
			dispatch(userActions.setAuthData(response.data));

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			extra.navigate(RoutesPaths[AppRoutes.PROFILE]);

			return response.data;
		} catch {
			return rejectWithValue('error');
		}
	},
);

