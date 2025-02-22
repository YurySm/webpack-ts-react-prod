import { BrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';

export function RouterDecorator() {
    return (
        // eslint-disable-next-line react/display-name
        (Story: () => ReactElement) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    );
}
