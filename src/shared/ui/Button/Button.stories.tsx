import type {
  ComponentMeta, ComponentStory,
} from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import Button, { ButtonTheme } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export default meta;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINED,
};
export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
