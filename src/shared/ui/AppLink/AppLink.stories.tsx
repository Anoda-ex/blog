import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    to: '/',
    children: 'link',
  },
};

export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    to: '/',
    children: 'link',
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    to: '/',
    children: 'link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],

};

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    to: '/',
    children: 'link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
