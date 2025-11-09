import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '@headlessui/react';
import { VStack } from '@/shared/ui/Stack';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: <VStack><div>1</div><div>2</div></VStack>
    },
};
