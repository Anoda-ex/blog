import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme{
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}
interface AppLinkProps extends LinkProps{
  className?: string,
  theme?: AppLinkTheme
}
const AppLink:FC<AppLinkProps> = ({
  className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
}) => (
  <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
    {children}
  </Link>
);

export default AppLink;
