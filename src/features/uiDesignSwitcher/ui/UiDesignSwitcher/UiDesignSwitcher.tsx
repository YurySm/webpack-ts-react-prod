import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { ListBox } from '@/shared/ui/redesigned/popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

// interface UiDesignSwitcherProps {
//     className?: string;
// }

export const UiDesignSwitcher = memo(() => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const authData = useAppSelector(getUserAuthData);

    const isAppRedesigned = getFeatureFlag('isAppRedesigned');

    const [isLoading, setIsLoading] = useState(false);

    const items = [
        {
            label: t('Новый'),
            value: 'new',
        },
        {
            label: t('Старый'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                    userId: authData.id,
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack gap={'8'}>
            <Text text={t('Вариант интерфейса')} />
            {isLoading ? (
                <Skeleton width={120} height={40} />
            ) : (
                <ListBox
                    value={isAppRedesigned ? 'new' : 'old'}
                    items={items}
                    onChange={onChange}
                />
            )}
        </HStack>
    );
});

UiDesignSwitcher.displayName = 'UiDesignSwitcher';
