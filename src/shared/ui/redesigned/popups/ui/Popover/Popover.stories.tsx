import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '@headlessui/react';
import { VStack } from '../../../Stack';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        children: (
            <VStack>
                <div>1</div>
                <div>2</div>
            </VStack>
        ),
    },
};
