import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return the correct value', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: 'test',
                password: 'test',
                error: 'error',
                isLoading: true,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('test');
    });

    test('should work with empty value', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
