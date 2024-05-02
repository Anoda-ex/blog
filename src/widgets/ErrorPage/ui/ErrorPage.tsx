import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

const ErrorPage = () => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(cls.ErrorPage)}>
      <h1>An error occurred while the application was running</h1>
      <Button theme={ButtonTheme.CLEAR} onClick={reloadPage}>Reload application</Button>
    </div>
  );
};

export default ErrorPage;
