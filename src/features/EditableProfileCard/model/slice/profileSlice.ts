import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../model/types/editableProfileCard';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile } from 'entities/Profile';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
    validateErrors: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.validateErrors = undefined
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
            state.form = action.payload
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.isLoading = true;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.readonly = true
            state.data = action.payload
            state.form = action.payload
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
