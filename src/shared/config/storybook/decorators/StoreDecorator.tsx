import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommenFormSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentFrom: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
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
