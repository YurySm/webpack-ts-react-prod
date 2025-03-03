import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';

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

    if(isLoading){
        return (
            <div className={ classNames(cls.profileCard, {}, [cls.loading, className]) }>
                <Loader />
            </div>
        )
    }

    if(error){
        return (
            <div className={ classNames(cls.profileCard, {}, [cls.error, className]) }>
                <Text
                    theme={ TextTheme.ERROR }
                    align={ TextAlign.CENTER }
                    title={ t('Произошла ошибка при загрузке') }
                    text={ t('Попробуйте перезагрузить страницу') }
                />
            </div>
        )
    }

    return (
        <div className={ classNames(cls.profileCard, {}, [className]) }>
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