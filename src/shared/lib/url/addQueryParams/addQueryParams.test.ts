import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'test',
        })
        expect(params).toBe('?test=test')
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'test',
            second: '2',
        })
        expect(params).toBe('?test=test&second=2')
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'test',
            second: undefined,
        })
        expect(params).toBe('?test=test')
    });
});

