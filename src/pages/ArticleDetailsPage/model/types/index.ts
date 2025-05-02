import {
    ArticleDetailsPageRecommendationsSchema
} from './articleDetailsPageRecommendationsSchema';

import {
    ArticleDetailsCommentsSchema,
} from './articleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    recommendations: ArticleDetailsPageRecommendationsSchema
    comments: ArticleDetailsCommentsSchema;
}