import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';

const data = {
    id: '1',
    firstName: 'Max',
    lastName: 'Min',
    age: 22,
    username: 'admin',
    city: 'Moscow',
    currency: Currency.USD,
    country: Country.Russia,
};

describe('fetchProfileData', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('rejected with status 403', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('rejected with validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, username: '' } } });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
