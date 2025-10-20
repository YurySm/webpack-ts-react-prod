import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        codeStr: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
};

export const Dark: Story = {
    args: {
        codeStr: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Violet: Story = {
    args: {
        codeStr: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)],
};
