import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articles');

    const { id } = useParams<{id: string}>()

    const isEdit = Boolean(id)

    return (
        <Page className={ classNames(cls.articleeditpage, {}, [className]) }>
            {
                isEdit ?
                    t(`Редактирование статьи`) + id :
                    t(`Создание новой статьи`)
            }
        </Page>
    );
};

export default ArticleEditPage;