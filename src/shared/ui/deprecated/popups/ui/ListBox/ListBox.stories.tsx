import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from '@/shared/ui/deprecated/popups/ui/ListBox/ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/popups/ListBox',
    component: ListBox,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {},
};
