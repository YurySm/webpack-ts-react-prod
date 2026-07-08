import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.png';

const meta: Meta<typeof ProfileCardDeprecated> = {
    title: 'entities/ProfileCard',
    component: ProfileCardDeprecated,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCardDeprecated>;

export const Primary: Story = {
    args: {
        data: {
            firstName: 'Max',
            lastName: 'Min',
            age: 22,
            username: 'admin',
            city: 'Moscow',
            currency: Currency.USD,
            country: Country.Russia,
            avatar,
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const Error: Story = {
    args: {
        error: 'true',
    },
};
