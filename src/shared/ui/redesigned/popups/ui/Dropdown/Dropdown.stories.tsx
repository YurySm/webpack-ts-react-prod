import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/popups/redesigned/Dropdown',
    component: Dropdown,
    argTypes: {},
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
        ],
    },
};

export const BottomEnd: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
        ],
        anchor: 'bottom end',
    },
};

export const BottomStart: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
        ],
        anchor: 'bottom start',
    },
};

export const TopEnd: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
        ],
        anchor: 'top end',
    },
};

export const TopStart: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
        ],
        anchor: 'top start',
    },
};

export const LeftStart: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
        ],
        anchor: 'left start',
    },
};

export const RightEnd: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
        ],
        anchor: 'right end',
    },
};
