import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test',
                password: 'test',
                error: 'error',
                isLoading: true,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('test');
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
