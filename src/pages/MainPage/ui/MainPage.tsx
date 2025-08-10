import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { Rating } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная')}
            <Rating
                title={ 'Как вам статья?' }
                hasFeedback
                feedbackTitle={ 'Оставьте отзыв' }
            />
        </Page>
    )
};

export default MainPage;
