import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    isLoading?: boolean;
    error?: string
    readonly?: boolean
    onChangeFirstname: (value: string) => void
    onChangeLastname: (value: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname
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
                    readOnly={ readonly }
                    value={ data?.firstName }
                    placeholder={ t('Ваше имя') }
                    className={ cls.input }
                    onChange={ onChangeFirstname }
                />
                <Input
                    readOnly={ readonly }
                    value={ data?.lastName }
                    placeholder={ t('Ваша фамилия') }
                    className={ cls.input }
                    onChange={ onChangeLastname }
                />
            </div>
        </div>
    );
};