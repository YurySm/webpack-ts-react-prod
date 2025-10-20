import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
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
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
            'elit. Culpa est modi porro? Accusantium ad aspernatur culpa\n' +
            'ea eveniet facere fuga laboriosam minus quam, qui reprehenderit,\n' +
            'repudiandae soluta suscipit tempora voluptatum.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
            'elit. Culpa est modi porro? Accusantium ad aspernatur culpa\n' +
            'ea eveniet facere fuga laboriosam minus quam, qui reprehenderit,\n' +
            'repudiandae soluta suscipit tempora voluptatum.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
