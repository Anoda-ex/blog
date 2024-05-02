import { StyleDecorator } from 'shared/config/decorators/styleDecorator';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouteDecorator } from 'shared/config/decorators/routeDecorator';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
