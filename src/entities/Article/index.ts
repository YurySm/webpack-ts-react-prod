export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'

export type { Article } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticlesDetailsError
} from './model/selectors/articlesDetails'

export { ArticleList } from './ui/ArticleList/ArticleList'
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs'
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector'

export { ArticleSortField, ArticleView, ArticleType } from '@/entities/Article/model/consts/consts';