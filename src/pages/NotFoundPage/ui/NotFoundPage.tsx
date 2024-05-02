import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}
const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => (
  <div className={classNames(cls.NotFoundPage, {}, [className])}>
    <h1>Page not found</h1>
    <AppLink to="/">
      Go to homepage
    </AppLink>
  </div>
);

export default NotFoundPage;
