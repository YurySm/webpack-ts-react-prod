import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { User, userActions } from 'entities/User';
import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios)

describe('loginByUsername', () => {
	let dispatch: Dispatch
	let getState: () => StateSchema

	beforeEach(() => {
		dispatch = jest.fn();
		getState = jest.fn();
	})

	test('fulfilled', async () => {
		const userValue = { id: '1', username: '123' }
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const action = loginByUsername({ password: '123', username: '123' } )
		const result = await  action(dispatch, getState, undefined)

		expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
		expect(dispatch).toHaveBeenCalledTimes(3)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(userValue)
	});

	test('rejected', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const action = loginByUsername({ password: '123', username: '123' } )
		const result = await  action(dispatch, getState, undefined)

		expect(mockedAxios.post).toHaveBeenCalled()
		expect(dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')
	});
});

describe('loginByUsername with TestAsyncThunk', () => {

	test('fulfilled', async () => {
		const userValue = { id: '1', username: '123' }
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({ password: '123', username: '123' } )

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(userValue)
	});

	test('rejected', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({ password: '123', username: '123' } )

		expect(mockedAxios.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')
	});
});
 