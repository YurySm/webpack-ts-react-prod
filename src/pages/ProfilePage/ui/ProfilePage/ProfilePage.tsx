import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { Page } from 'widgets/Page/ui/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');

    if(!id) {
        return (
            <Text
                theme={ TextTheme.ERROR }
                text={ t('Профиль не найден') }
            />
        )
    }

    return (
        <Page className={ classNames(cls.profilePage, {}, [className]) }>
            <EditableProfileCard id={ id }/>
        </Page>
    );
};

export default ProfilePage;
