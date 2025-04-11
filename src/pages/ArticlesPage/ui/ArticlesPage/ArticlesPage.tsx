import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    // const { t } = useTranslation('articles');

    return (
        <div className={ classNames(cls.ArticlesPage, {}, [className]) }>
            <ArticleList
                isLoading
                view={ ArticleView.BIG }
                articles={ [] }/>
        </div>
    );
};

export default memo(ArticlesPage);