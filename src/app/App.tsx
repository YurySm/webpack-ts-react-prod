import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'app/styles/index.scss'

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={ classNames('app', {}, [theme]) }>
			<Navbar/>
			<div className={ 'content-page' }>
				<Sidebar/>
				<AppRouter/>
			</div>
		</div>
	);
};

