import { Button, ButtonTheme } from './index';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Test render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('Test theme', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});
