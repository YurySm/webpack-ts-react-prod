import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    // const authData = useAppSelector(getUserAuthData)
    // const profileData = useAppSelector(getProfileData)
    // const isCanEdit = authData?.id === profileData?.id
    // const readonly = useAppSelector(getProfileReadonly)
    // const dispatch = useAppDispatch();
    //
    // const onEdit = useCallback(() => {
    //     dispatch(profileActions.setReadonly(false))
    // }, [dispatch]);
    //
    // const onCancelEdit = useCallback(() => {
    //     dispatch(profileActions.cancelEdit())
    // }, [dispatch]);
    //
    // const onSave = useCallback(() => {
    //     dispatch(updateProfileData())
    // }, [dispatch]);

    return (
        <div className={ classNames(cls.profilePageHeader, {}, [className]) }>
            <Text title={ t('Профиль') } />
            {/*{*/}
            {/*    isCanEdit && (*/}
            {/*        <div className={ cls.editBtns }>*/}
            {/*            {*/}
            {/*                readonly ?*/}
            {/*                    <Button*/}
            {/*                        onClick={ onEdit }*/}
            {/*                        theme={ ButtonTheme.OUTLINE }>*/}
            {/*                        {t('Редактировать')}*/}
            {/*                    </Button> :*/}
            {/*                    <>*/}
            {/*                        <Button*/}
            {/*                            onClick={ onCancelEdit }*/}
            {/*                            theme={ ButtonTheme.OUTLINE_RED }>*/}
            {/*                            {t('Отменить')}*/}
            {/*                        </Button>*/}

            {/*                        <Button*/}
            {/*                            onClick={ onSave }*/}
            {/*                            theme={ ButtonTheme.OUTLINE }>*/}
            {/*                            {t('Сохранить')}*/}
            {/*                        </Button>*/}
            {/*                    </>*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}*/}
        </div>
    );
};