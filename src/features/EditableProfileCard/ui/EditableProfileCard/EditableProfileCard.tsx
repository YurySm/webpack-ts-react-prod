import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useCallback } from 'react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
    getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileError } from '../../model/types/editableProfileCard';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    EditableProfileCardHeader
} from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const {
        className,
        id
    } = props;
    const { t } = useTranslation('profile');

    const formData = useAppSelector(getProfileForm)
    const isLoading = useAppSelector(getProfileLoading)
    const error = useAppSelector(getProfileError)
    const readonly = useAppSelector(getProfileReadonly)
    const validateErrors = useAppSelector(getProfileValidateErrors)
    const dispatch = useAppDispatch();

    const validateErrorsTranslation = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Не корректные данные пользователя'),
        [ValidateProfileError.INCORRECT_USER_AGE]:  t('Не корректный возраст пользователя'),
        [ValidateProfileError.NO_DATA]:  t('Данные не указаны'),
        [ValidateProfileError.SERVER_ERROR]:  t('Ошибка при сохранении данных'),
    }

    useInitialEffect(() => {
        if(id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }))
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string)  => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string)  => {
        dispatch(profileActions.updateProfile({ age: Number(value?.replace(/^[\D0]+|\D/g, '') || 0) }))
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string)  => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string)  => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string)  => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency)  => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country)  => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div data-testid={ 'EditableProfileCard' } className={ classNames('', {}, [className]) }>
                <EditableProfileCardHeader/>
                {
                    validateErrors && validateErrors?.length > 0 &&
                    validateErrors.map(error => (
                        <Text
                            data-testid={ 'EditableProfileCard.Error' }
                            key={ error }
                            theme={ TextTheme.ERROR }
                            text={ validateErrorsTranslation[error] }/>
                    ))
                }

                <ProfileCard
                    data={ formData }
                    isLoading={ isLoading }
                    error={ error }
                    readonly={ readonly }
                    onChangeFirstname={ onChangeFirstname }
                    onChangeLastname={ onChangeLastname }
                    onChangeAge={ onChangeAge }
                    onChangeCity={ onChangeCity }
                    onChangeAvatar={ onChangeAvatar }
                    onChangeUsername={ onChangeUsername }
                    onChangeCurrency={ onChangeCurrency }
                    onChangeCountry={ onChangeCountry }
                />
            </div>
        </DynamicModuleLoader>

    );
};