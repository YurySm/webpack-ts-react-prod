import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('AdminPanelPage');

    return <Page>{t('Админ панель')}</Page>;
};

export default AdminPanelPage;
