import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData', () => {
    test('should return the correct value', () => {
        const form = {
            firstName: 'Max',
            lastName: 'Min',
            age: 22,
            username: 'admin',
            city: 'Moscow',
            currency: Currency.USD,
            country: Country.Russia,
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    })
});
