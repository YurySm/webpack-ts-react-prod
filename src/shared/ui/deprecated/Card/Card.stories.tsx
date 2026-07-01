import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/shared/ui/deprecated/Card/Card';
import { Text } from '@/shared/ui/deprecated/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <Text title={'Primary'} text={'test text'} />,
    },
};
