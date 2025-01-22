import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import 'app/styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <button onClick={toggleTheme}>toggle theme</button>

            <Routes>
                <Route
                    path={'/about'}
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutPage/>
                        </Suspense>
                    }
                />
                <Route
                    path={'/'}
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <MainPage/>
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
};

