import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { PageLoader } from './PageLoader';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    // parameters: {
    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
