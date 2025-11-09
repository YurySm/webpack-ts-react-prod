import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

jest.mock('@/shared/api/api', () => ({
    $api: {
        get: jest.fn(),
        post: jest.fn(),
        interceptors: {
            request: { use: jest.fn() },
            response: { use: jest.fn() },
        },
    },
}));

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    // eslint-disable-next-line
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
    api:  jest.MockedFunctionDeep<AxiosStatic>;
    // eslint-disable-next-line
    navigate: jest.MockedFn<any>;


    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.navigate = jest.fn();
        this.api = mockedAxios
    }

    async callThunk(arg?: Arg) {
        const action = this.actionCreator(arg as Arg);
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            });

        return result;
    }
}
