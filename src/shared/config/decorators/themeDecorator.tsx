import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
  <div className={classNames('app', {}, [theme])}>
    <Story />
  </div>
);
