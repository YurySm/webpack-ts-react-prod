import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.png';
import { NewDesignDecorator } from '@/shared/config/storybook/decorators/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const args = {
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
};

export const Primary: Story = {
    args,
};

export const PrimaryRedesigned: Story = {
    args,
    decorators: [NewDesignDecorator()],
};

export const PrimaryRedesignedDARK: Story = {
    args,
    decorators: [NewDesignDecorator(), ThemeDecorator(Theme.DARK)],
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
