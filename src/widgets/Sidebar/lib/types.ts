import React from 'react';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { routesPath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: routesPath.main,
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: routesPath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: routesPath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
  },
];
