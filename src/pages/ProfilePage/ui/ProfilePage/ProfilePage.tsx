import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { Page } from '@/widgets/Page';
import { useParams } from 'react-router';
import { EditableProfileCard } from '@/features/EditableProfileCard';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    console.log(id)
    return (
        <Page data-testid={ 'ProfilePage' } className={ classNames(cls.profilePage, {}, [className]) }>
            <EditableProfileCard id={ id }/>
        </Page>
    );
};

export default ProfilePage;
