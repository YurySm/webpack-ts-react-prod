import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { Page } from '@/widgets/Page/ui/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { useParams } from 'react-router';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    return (
        <Page className={ classNames(cls.profilePage, {}, [className]) }>
            <EditableProfileCard id={ id }/>
        </Page>
    );
};

export default ProfilePage;
