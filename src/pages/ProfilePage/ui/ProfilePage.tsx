import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileLoading,
    getProfileReadonly, profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    const data = useAppSelector(getProfileData)
    const isLoading = useAppSelector(getProfileLoading)
    const error = useAppSelector(getProfileError)
    const readonly = useAppSelector(getProfileReadonly)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }))
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string)  => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }))
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.profilePage, {}, [className]) }>
                <ProfilePageHeader/>
                <ProfileCard
                    data={ data }
                    isLoading={ isLoading }
                    error={ error }
                    readonly={ readonly }
                    onChangeFirstname={ onChangeFirstname }
                    onChangeLastname={ onChangeLastname }
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
