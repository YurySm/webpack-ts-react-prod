import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useAppSelector(getProfileData)
    const isLoading = useAppSelector(getProfileLoading)
    const error = useAppSelector(getProfileError)

    return (
        <div className={ classNames(cls.profileCard, {}, [className]) }>
            <div className={ cls.header }>
                <Text title={ t('Профиль') } />
                <Button theme={ ButtonTheme.OUTLINE }>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={ cls.data }>
                <Input
                    value={ data?.firstName }
                    placeholder={ t('Ваше имя') }
                    className={ cls.input }
                />
                <Input
                    value={ data?.lastName }
                    placeholder={ t('Ваша фамилия') }
                    className={ cls.input }
                />
            </div>
        </div>
    );
};