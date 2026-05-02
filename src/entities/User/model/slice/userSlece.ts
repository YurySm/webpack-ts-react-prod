import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage';
import { setFeaturesFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeaturesFlags(action.payload.features);
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id);
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.authData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveJsonSettings.fulfilled, (state, action) => {
            if (state.authData) {
                state.authData.jsonSettings = action.payload;
            }
        });
        builder.addCase(initAuthData.fulfilled, (state, action) => {
            state.authData = action.payload;
            setFeaturesFlags(action.payload.features);
            state._inited = true;
        });
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
