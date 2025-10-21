import { classNames } from '@/shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/popups';

interface CountrySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Country;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Armenia, label: Country.Armenia },
    { value: Country.Belarus, label: Country.Belarus },
    { value: Country.Russia, label: Country.Russia },
    { value: Country.Kazakhstan, label: Country.Kazakhstan },
]

export const CountrySelect = memo(({ className, readonly, value, onChange }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            className={ classNames('', {}, [className]) }
            label={ t('Укажите страну') }
            onChange={ onChangeHandler }
            items={ options }
            value={ value }
            readonly={ readonly }
        />
    );
})

CountrySelect.displayName = 'CurrencySelect';