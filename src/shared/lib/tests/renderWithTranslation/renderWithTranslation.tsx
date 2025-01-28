import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTesting';
import { render } from '@testing-library/react';

export function renderWithTranslation(componet: ReactNode) {
    return render(
        <I18nextProvider i18n={i18n}>
            {componet}
        </I18nextProvider>,
    );
}
