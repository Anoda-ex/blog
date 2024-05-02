import type { Meta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ComponentStory } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppLink',
  component: AppLink,
} satisfies Meta<typeof AppLink>;

export default meta;
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  to: '/',
  children: 'link',
};

export const Inverted = Template.bind({});
Inverted.args = {
  theme: AppLinkTheme.INVERTED,
  to: '/',
  children: 'link',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
  to: '/',
  children: 'link',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  theme: AppLinkTheme.INVERTED,
  to: '/',
  children: 'link',
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
