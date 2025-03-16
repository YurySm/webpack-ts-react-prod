import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Action } from '@reduxjs/toolkit';

const data = {
    firstName: 'Max',
    lastName: 'Min',
    age: 22,
    username: 'admin',
    city: 'Moscow',
    currency: Currency.USD,
    country: Country.Russia,
};


describe('profileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({  readonly: true });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: undefined,
            validateErrors: undefined
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({
            data,
            form: data,
            validateErrors: undefined,
            readonly: true
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: 'admin'
            },
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'test'
                }),
            ),
        ).toEqual({
            form: {
                username: 'test'
            },
        });
    });

    test('updateProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending as unknown as Action,
            ),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined
        });
    });

    test('updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form:data,
            data,
        });
    });
});
