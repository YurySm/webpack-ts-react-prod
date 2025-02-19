import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');

	return (
		<div className={ classNames('', {}, [className]) }>
			{t('profile page')}
		</div>
	);
};

export default ProfilePage;