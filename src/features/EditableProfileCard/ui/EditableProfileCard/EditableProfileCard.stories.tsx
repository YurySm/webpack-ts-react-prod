import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: '_/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    args: {},
};
