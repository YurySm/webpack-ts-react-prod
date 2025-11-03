export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'

export type { Article } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticlesDetailsError
} from './model/selectors/articlesDetails'

export { ArticleList } from './ui/ArticleList/ArticleList'

export { ArticleSortField, ArticleView, ArticleType } from '@/entities/Article/model/consts/consts';

export { articleDetailsReducer } from './model/slice/articleDetailSlice'