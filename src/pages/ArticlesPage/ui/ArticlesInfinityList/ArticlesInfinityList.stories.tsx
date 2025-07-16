import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesInfinityList } from './ArticlesInfinityList';

const meta: Meta<typeof ArticlesInfinityList> = {
    title: '_/ArticlesInfinityList',
    component: ArticlesInfinityList,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesInfinityList>;

export const Primary: Story = {
    args: {},
};
