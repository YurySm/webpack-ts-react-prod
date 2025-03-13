import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
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

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);

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
            <div className={ classNames(cls.profilePage, {}, [className]) }>
                <ProfilePageHeader/>

                {validateErrors && validateErrors?.length > 0 &&
                    validateErrors.map(error => (
                        <Text
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

export default ProfilePage;
