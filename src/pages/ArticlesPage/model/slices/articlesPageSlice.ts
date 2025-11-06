import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage';
import { SortOrder } from '@/shared/types/sort';

const articlesAdapter = createEntityAdapter({
    selectId: (article: Article ) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    state => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        limit: 9,
        _inited: false,
        sort: ArticleSortField.CREATED,
        order: 'asc',
        search: '',
        type: ArticleType.ALL
    }),
    reducers: {
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
            state._inited = true
        },
        setView: (state, { payload }: {payload: ArticleView} ) => {
            state.view = payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, payload)
        },
        setPage: (state, { payload }: {payload: number} ) => {
            state.page = payload
        },
        setSort: (state, { payload }: {payload: ArticleSortField} ) => {
            state.sort = payload
        },
        setOrder: (state, { payload }: {payload: SortOrder} ) => {
            state.order = payload
        },
        setSearch: (state, { payload }: {payload: string} ) => {
            state.search = payload
        },
        setType: (state, { payload }: {payload: ArticleType} ) => {
            state.type = payload
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
            if(action.meta.arg.replace) {
                articlesAdapter.removeAll(state)
            }
        });
        builder.addCase(fetchArticlesList.fulfilled, (state, action ) => {
            state.isLoading = false;
            state.hasMore = action.payload.length > state.limit

            if(action.meta.arg.replace) {
                articlesAdapter.setMany(state, action.payload)
            } else {
                articlesAdapter.addMany(state, action.payload)
            }


        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
})


export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions
} = articlesPageSlice;