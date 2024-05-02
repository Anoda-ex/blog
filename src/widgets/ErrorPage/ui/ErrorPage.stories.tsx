import type { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ErrorPage } from 'widgets/ErrorPage';
import { ComponentMeta } from '@storybook/react';

const meta = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
