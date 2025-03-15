import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';

const profileData= {
    firstName: 'Max',
    lastName: 'Min',
    age: 22,
    username: 'admin',
    city: 'Moscow',
    currency: Currency.USD,
    country: Country.Russia,
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(profileData);
        expect(result).toEqual([])
    });

    test('without firstName, lastName, username', async () => {
        const result = validateProfileData({
            ...profileData,
            firstName: '',
            lastName: '',
            username: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    });

    test('without age', async () => {
        const result = validateProfileData({
            ...profileData,
            age: 0,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE])
    });

    test('with empty data', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
        ])
    });

    test('without data', async () => {
        const result = validateProfileData(undefined);
        expect(result).toEqual([ValidateProfileError.NO_DATA])
    });
});
