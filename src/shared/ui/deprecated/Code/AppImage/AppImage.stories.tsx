import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from '@/shared/ui/deprecated/Code/AppImage/AppImage';

const meta: Meta<typeof AppImage> = {
    title: '_/AppImage',
    component: AppImage,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
    args: {},
};
