import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('only render', async () => {
        componentRender(<Sidebar />);
        expect(await screen.findByTestId('sidebar')).toBeInTheDocument();
    });

    test('test collapsed', async () => {
        componentRender(<Sidebar />);
        const toggleBtn = await screen.findByTestId('toggle');
        expect(await screen.findByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(await screen.findByTestId('sidebar')).toHaveClass('collapsed');
    });
});
