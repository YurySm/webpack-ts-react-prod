import { useTranslation } from 'react-i18next';

import { Currency, CurrencySelect } from '@/entities/Currency';

import { Country, CountrySelect } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import { Text } from '@/shared/ui/redesigned/Text';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');

    return (
        <Card padding={'24'}>
            <Text
                variant={'error'}
                align={'center'}
                title={t('Произошла ошибка при загрузке')}
                text={t('Попробуйте перезагрузить страницу')}
            />
        </Card>
    );
};

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding={'24'}>
            <VStack gap={'32'}>
                <HStack justify={'center'}>
                    <Skeleton width={128} height={128} borderRadius={'50%'} />
                </HStack>
                <HStack gap={'24'}>
                    <VStack gap={'16'}>
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                    </VStack>

                    <VStack gap={'16'}>
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
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

    return (
        <Card padding={'24'} className={className}>
            <VStack gap={'32'}>
                {data?.avatar && (
                    <HStack justify={'center'}>
                        <Avatar
                            size={128}
                            src={data?.avatar}
                            alt={data?.username}
                        />
                    </HStack>
                )}

                <HStack gap={'24'}>
                    <VStack gap={'16'}>
                        <Input
                            readOnly={readonly}
                            value={data?.firstName}
                            label={t('Имя')}
                            onChange={onChangeFirstname}
                            data-testid={'ProfileCard.FirstName'}
                        />
                        <Input
                            readOnly={readonly}
                            value={data?.lastName}
                            label={t('Фамилия')}
                            onChange={onChangeLastname}
                            data-testid={'ProfileCard.LastName'}
                        />
                        <Input
                            readOnly={readonly}
                            value={data?.age}
                            label={t('Возраст')}
                            onChange={onChangeAge}
                        />
                        <Input
                            readOnly={readonly}
                            value={data?.city}
                            label={t('Город')}
                            onChange={onChangeCity}
                        />
                    </VStack>

                    <VStack gap={'16'}>
                        <Input
                            readOnly={readonly}
                            value={data?.username}
                            label={t('Имя пользователя')}
                            onChange={onChangeUsername}
                        />
                        <Input
                            readOnly={readonly}
                            value={data?.avatar}
                            label={t('Ссылка на аватар')}
                            onChange={onChangeAvatar}
                        />

                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />

                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
