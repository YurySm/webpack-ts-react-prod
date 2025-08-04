import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileData', () => {
    test('should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
    })
});
