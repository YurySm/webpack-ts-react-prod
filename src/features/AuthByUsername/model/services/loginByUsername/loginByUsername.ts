import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('loginForm/loginByUsername', async (data, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<User>('/login', data);

        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
