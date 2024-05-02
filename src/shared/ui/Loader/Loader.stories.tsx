import type { ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Loader } from 'shared/ui/Loader/Loader';
import { ComponentStory } from '@storybook/react';

const meta = {
  title: 'widgets/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

export default meta;
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
