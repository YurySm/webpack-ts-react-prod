import { Theme } from 'app/providers/ThemeProvider';
import { ReactElement } from 'react';

export function ThemeDecorator(theme: Theme) {
	return (
	// eslint-disable-next-line react/display-name
		(Story: () => ReactElement) => (
			<div className={ `app ${theme}` }>
				<Story />
			</div>
		));
} 
