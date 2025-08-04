import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticlesDetailsError
} from './articlesDetails';

describe('articlesDetails', () => {
    test('getArticleDetailsData should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    title: 'test title'
                }
            }
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual({ title: 'test title' });
    });

    test('getArticleDetailsData should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
    })

    test('getArticleDetailsIsLoading should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });

    test('getArticleDetailsData should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    })

    test('getArticlesDetailsError should return the correct value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };
        expect(getArticlesDetailsError(state as StateSchema)).toBe('error');
    });

    test('getArticlesDetailsError should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticlesDetailsError(state as StateSchema)).toBe(undefined);
    })
});
