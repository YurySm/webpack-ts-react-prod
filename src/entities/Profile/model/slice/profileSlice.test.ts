import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Action } from '@reduxjs/toolkit';
import { fetchProfileData } from 'entities/Profile';

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

    test('fetchProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'error'
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.pending as unknown as Action,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    test('fetchProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data:undefined,
            form:undefined,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.fulfilled(data, '', '1') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            form:data,
            data,
        });
    });

    test('fetchProfileData.rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data:undefined,
            form:undefined,
            error: undefined
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.rejected(new Error(), '', '1', 'error') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            data:undefined,
            form:undefined,
            error: 'error'
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

    test('updateProfileData.rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data:undefined,
            form:undefined,
            validateErrors: undefined
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.rejected(new Error(), '', undefined, [ValidateProfileError.SERVER_ERROR]) as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            data:undefined,
            form:undefined,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        });
    });
});
