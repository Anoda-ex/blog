import { RouteProps } from 'react-router';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not-found'
}
export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routesPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routesPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routesPath['not-found'],
    element: <NotFoundPage />,
  },
};
