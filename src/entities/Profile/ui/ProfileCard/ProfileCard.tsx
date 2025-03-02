import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    isLoading?: boolean;
    error?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
    } = props
    const { t } = useTranslation('profile');

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