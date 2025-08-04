import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('Test theme', () => {
        render(<Button theme={ ButtonTheme.CLEAR }>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});
