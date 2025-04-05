import { AddCommentFormSchema } from '../types/addCommentForm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AddCommentFormSchema = {
    error: undefined,
    isLoading: false
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, { payload }: PayloadAction<string>) => {
            state.text = payload;
        },
    }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
