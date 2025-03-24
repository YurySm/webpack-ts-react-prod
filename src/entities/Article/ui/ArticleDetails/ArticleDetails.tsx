import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailSlice';
import { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticlesDetailsError
} from '../../model/selectors/articlesDetails';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id
    } = props;

    const { t } = useTranslation('article')

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(getArticleDetailsIsLoading)
    const error = useAppSelector(getArticlesDetailsError)
    const article = useAppSelector(getArticleDetailsData)

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id]);

    let content

    if(isLoading) {
        content = (
            <div className={ classNames(cls.articleDetails, {}, [className]) }>
                {t('Loading')}
            </div>
        )
    } else if(error) {
        content = (
            <div className={ classNames(cls.articleDetails, {}, [className]) }>
                {t('error')}
            </div>
        )
    } else  {
        content = (
            <div className={ classNames(cls.articleDetails, {}, [className]) }>
                {article?.type}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            {content}
        </DynamicModuleLoader>
    );
})

ArticleDetails.displayName = 'ArticleDetails';