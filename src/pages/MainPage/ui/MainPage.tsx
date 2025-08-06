import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная')}
            <StarRating/>
        </Page>
    )
};

export default MainPage;
