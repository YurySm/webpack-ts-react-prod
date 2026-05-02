import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageGreeting } from './ArticlesPageGreeting';

const meta: Meta<typeof ArticlesPageGreeting> = {
    title: '_/ArticlesPageGreeting',
    component: ArticlesPageGreeting,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPageGreeting>;

export const Primary: Story = {
    args: {},
};
