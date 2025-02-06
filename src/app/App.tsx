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
				<button type={ 'button' } onClick={ () => setIsOpen(true) }>!!!!!!!!!!!!</button>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<Modal isOpen={ isOpen } onClose={ () => setIsOpen(false) }>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusamus eligendi
					eos fuga maxime mollitia nihil odit optio sapiente tenetur
					voluptatem! Amet,
					deserunt dolore. At aut explicabo incidunt natus,
					qui voluptatum?
				</Modal>
			</div>
		</div>
	);
};

