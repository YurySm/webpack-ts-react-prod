import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

describe('getProfileData', () => {
    test('should return the correct value', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
});
