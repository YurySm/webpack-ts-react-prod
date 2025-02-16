import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export function StoreDecorator(state: Partial<StateSchema>) {
	return (
	// eslint-disable-next-line react/display-name
		(Story: StoryFn) => (
			<StoreProvider initialState={ state }>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/* @ts-expect-error*/}
				<Story/>
			</StoreProvider>
		));
}
 