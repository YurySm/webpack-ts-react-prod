import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Currency;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.EUR, label: Currency.EUR },
    { value: Currency.USD, label: Currency.USD },
    { value: Currency.RUB, label: Currency.RUB },
]

export const CurrencySelect = memo(({ className, readonly, value, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
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

CurrencySelect.displayName = 'CurrencySelect';