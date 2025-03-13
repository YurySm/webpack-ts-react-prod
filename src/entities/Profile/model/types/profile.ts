import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
