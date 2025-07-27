import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from 'shared/ui/Button/Button';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/popups/Dropdown',
    component: Dropdown,
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Story />
            </div>
        )
    ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            }
        ]
    },
};

export const BottomEnd: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            }
        ],
        anchor: 'bottom end'
    },
};

export const BottomStart: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            }
        ],
        anchor: 'bottom start'
    },
};

export const TopEnd: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            }
        ],
        anchor: 'top end'
    },
};

export const TopStart: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            }
        ],
        anchor: 'top start'
    },
};

export const LeftStart: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            }
        ],
        anchor: 'left start'
    },
};

export const RightEnd: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            }
        ],
        anchor: 'right end'
    },
};


