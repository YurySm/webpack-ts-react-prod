import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

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
        <Select
            className={ classNames('', {}, [className]) }
            label={ t('Укажите валюту') }
            readOnly={ readonly }
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
        />
    );
})

CountrySelect.displayName = 'CurrencySelect';