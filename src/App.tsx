import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {Theme} from "./theme/ThemeContext";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <button onClick={toggleTheme}>{theme === "light" ? Theme.DARK : Theme.LIGHT}</button>

            <Routes>
                <Route
                    path={'/about'}
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutPageLazy/>
                        </Suspense>
                    }
                />
                <Route
                    path={'/'}
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <MainPageLazy/>
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
};

