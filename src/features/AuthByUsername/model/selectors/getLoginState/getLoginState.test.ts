import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return the correct value', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: 'test',
                password: 'test',
                error: 'error',
                isLoading: true,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'test',
            password: 'test',
            error: 'error',
            isLoading: true,
        });
    });

    test('should work with empty value', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
