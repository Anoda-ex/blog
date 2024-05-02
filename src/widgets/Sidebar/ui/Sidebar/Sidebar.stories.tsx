import type { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Sidebar } from 'widgets/Sidebar';
import { ComponentMeta } from '@storybook/react';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
