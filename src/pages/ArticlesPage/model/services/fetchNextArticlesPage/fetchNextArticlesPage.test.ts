import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList')


describe('fetchNextArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: false,
                hasMore: true,
                limit: 4,
                page: 2
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
    });

    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: false,
                limit: 4,
                page: 2,
                hasMore: false,
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticlesList not called with isLoading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: true,
                limit: 4,
                page: 2,
                hasMore: true,
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});