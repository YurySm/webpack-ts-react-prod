import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Stack/Flex',
    component: Flex,
    argTypes: {},
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: '8',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};


export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const JustifyBetween: Story = {
    args: {
        justify: 'between',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: (
            <>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }} >text</div>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div style={{ padding: '10px', border: '1px solid black' }}>text</div>
            </>
        )
    },
};