import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export function StoreDecorator(
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) {
    return (
        // eslint-disable-next-line react/display-name
        (Story: StoryFn) => (
            <StoreProvider
                initialState={ state }
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error*/}
                <Story />
            </StoreProvider>
        )
    );
}
