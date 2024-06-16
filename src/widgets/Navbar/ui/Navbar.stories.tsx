import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import Navbar from 'widgets/Navbar/ui/Navbar';
import { StoreDecorator } from 'shared/config/decorators/storeDecorator';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const state = {
  user: {
    authData: {
      username: '1',
      id: '1',
    },
  },
};
export const Light: Story = {
  args: {},
  decorators: [StoreDecorator(state)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(state)],
};
