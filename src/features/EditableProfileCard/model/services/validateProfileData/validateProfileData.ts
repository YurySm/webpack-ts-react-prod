import { ValidateProfileError } from '../../../model/consts/consts';
import { Profile } from 'entities/Profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const {
        lastName,
        firstName,
        age,
        username
    } = profile;

    const errors: ValidateProfileError[] = []

    if(!lastName || !firstName || !username) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if(!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }

    return errors
}