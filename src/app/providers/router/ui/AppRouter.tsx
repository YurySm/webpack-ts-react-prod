import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                {element}
                            </Suspense>}/>
                ))
            }
        </Routes>
    );
};

export default AppRouter;
