export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'

export { Article, ArticleView } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticlesDetailsError
} from './model/selectors/articlesDetails'

export { ArticleList } from './ui/ArticleList/ArticleList'
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'