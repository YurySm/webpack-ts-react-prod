import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';

import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    isLoading?: boolean;
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry
    } = props

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly
    }

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
        <div className={ classNames(cls.profileCard, mods, [className]) }>
            <div className={ cls.data }>
                {
                    data?.avatar &&
                    <div className={ cls.avatarWrapp }>
                        <Avatar
                            src={ data?.avatar }
                            alt={ data?.username }/>
                    </div>
                }
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
                <Input
                    readOnly={ readonly }
                    value={ data?.age }
                    placeholder={ t('Ваш возраст') }
                    className={ cls.input }
                    onChange={ onChangeAge }
                />
                <Input
                    readOnly={ readonly }
                    value={ data?.city }
                    placeholder={ t('Город') }
                    className={ cls.input }
                    onChange={ onChangeCity }
                />
                <Input
                    readOnly={ readonly }
                    value={ data?.username }
                    placeholder={ t('Введите имя пользователя') }
                    className={ cls.input }
                    onChange={ onChangeUsername }
                />
                <Input
                    readOnly={ readonly }
                    value={ data?.avatar }
                    placeholder={ t('Введите ссылку на аватар') }
                    className={ cls.input }
                    onChange={ onChangeAvatar }
                />

                <CurrencySelect
                    value={ data?.currency }
                    onChange={ onChangeCurrency }
                    readonly={ readonly }
                    className={ cls.input }
                />

                <CountrySelect
                    value={ data?.country }
                    onChange={ onChangeCountry }
                    readonly={ readonly }
                    className={ cls.input }
                />
            </div>
        </div>
    );
};