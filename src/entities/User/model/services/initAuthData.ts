import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        try {
            const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (!userId) {
                return rejectWithValue('error');
            }

            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            if (!response) {
                return rejectWithValue('error');
            }

            return response;
        } catch {
            return rejectWithValue('error');
        }
    },
);
