import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback="Loading">
      <Routes>
        {Object.values(routeConfig).map(({element, path}) =>
          <Route key={path} element={element} path={path} />
        )}
      </Routes>
    </Suspense>
  );
};
