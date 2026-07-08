import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { useTranslation } from 'react-i18next';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';

import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(cls.profileCard, {}, [cls.error])}>
            <TextDeprecated
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке')}
                text={t('Попробуйте перезагрузить страницу')}
            />
        </div>
    );
};

export const ProfileCardDeprecatedLoader = () => {
    return (
        <div className={classNames(cls.profileCard, {}, [cls.loading])}>
            <LoaderDeprecated />
        </div>
    );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapp}>
                        <AvatarDeprecated
                            src={data?.avatar}
                            alt={data?.username}
                        />
                    </div>
                )}
                <InputDeprecated
                    readOnly={readonly}
                    value={data?.firstName}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    data-testid={'ProfileCard.FirstName'}
                />
                <InputDeprecated
                    readOnly={readonly}
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    data-testid={'ProfileCard.LastName'}
                />
                <InputDeprecated
                    readOnly={readonly}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                />
                <InputDeprecated
                    readOnly={readonly}
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                />
                <InputDeprecated
                    readOnly={readonly}
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                />
                <InputDeprecated
                    readOnly={readonly}
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                />

                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                    className={cls.input}
                />

                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
