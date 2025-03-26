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
    getArticlesDetailsError,
} from '../../model/selectors/articlesDetails';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EaeIcon from 'shared/assets/icons/eye-20-20.svg';

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
            <>
                <Skeleton
                    className={ cls.avatar }
                    width={ 200 }
                    height={ 200 }
                    borderRadius={ '50%' }
                />
                <Skeleton
                    className={ cls.title }
                    width={ 400 }
                    height={ 35 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ 70 }
                    height={ 35 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ '100%' }
                    height={ 250 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ '100%' }
                    height={ 250 }
                />
                <Skeleton
                    className={ cls.skeleton }
                    width={ '100%' }
                    height={ 250 }
                />
            </>
        )
    } else if(error) {
        content = (
            <>
                <Text
                    align={ TextAlign.CENTER }
                    title={ t('Произошла ошибка при загрузке страницы') }
                    theme={ TextTheme.ERROR }
                />
            </>
        )
    } else  {
        content = (
            <>
                <Avatar
                    src={ article?.img }
                    size={ 200 }
                    className={ cls.avatar }
                />

                <Text
                    className={ cls.title }
                    title={ article?.title }
                    text={ article?.subtitle }
                    size={ TextSize.L }
                />

                <div className={ cls.articleInfo }>
                    <EaeIcon />

                    <Text
                        text={ article?.views.toString() }
                    />
                </div>

                <div className={ cls.articleInfo }>
                    <CalendarIcon />

                    <Text
                        text={ article?.createdAt }
                    />
                </div>

            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.articleDetails, {}, [className]) }>
                {content}
            </div>
        </DynamicModuleLoader>
    );
})

ArticleDetails.displayName = 'ArticleDetails';