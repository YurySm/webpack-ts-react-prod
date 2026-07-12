import { Button } from './Button';

import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>1122</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('Test theme', () => {
        render(<Button variant={'clear'}>1232</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});
