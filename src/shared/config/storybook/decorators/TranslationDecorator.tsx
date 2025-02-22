import { StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTesting';
import { Suspense } from 'react';

export function TranslationDecorator() {
    return (
        // eslint-disable-next-line react/display-name
        (Story: StoryFn) => (
            <I18nextProvider i18n={i18n}>
                <Suspense fallback={<div></div>}>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-expect-error*/}
                    <Story />
                </Suspense>
            </I18nextProvider>
        )
    );
}
