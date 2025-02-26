import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('test'),
            ),
        ).toEqual({ username: 'test' });
    });

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '',
        };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('test'),
            ),
        ).toEqual({ password: 'test' });
    });
});
