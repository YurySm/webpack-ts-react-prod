import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
	profile: profileReducer,
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');

	return (
		<DynamicModuleLoader reducers={ reducers }>
			<div className={ classNames('', {}, [className]) }>
				{t('profile page')}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;