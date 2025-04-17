import { ScrollSaveSchema, ScrollSchema } from '../types/scrollSaveSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ScrollSaveSchema = {
    // data: undefined,
    // isLoading: false,
    // error: undefined,
    scroll: {}
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetch.pending, (state) => {
    //         state.isLoading = true;
    //         state.error = undefined;
    //     });
    //     builder.addCase(fetch.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.data = action.payload
    //     });
    //     builder.addCase(fetch.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     });
    // },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;