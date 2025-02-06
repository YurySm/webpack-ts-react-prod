import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'app/styles/index.scss'
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal';

export const App = () => {
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={ classNames('app', {}, [theme]) }>
			<Navbar/>
			<div className={ 'content-page' }>
				<Sidebar/>
				<AppRouter/>
				<button type="button" onClick={ () => setIsOpen(true) }>!!!!!!!!!!!!!</button>
				<Modal isOpen={ isOpen } onClose={ () => setIsOpen(false) }>
					Lorem ipsum dolor sit amet, consectetur
					elit. Culpa est modi porro? Accusantium ad aspernatur culpa
					ea eveniet facere fuga laboriosam minus quam, qui reprehenderit,
					repudiandae soluta suscipit tempora voluptatum.
				</Modal>
			</div>
		</div>
	);
};

