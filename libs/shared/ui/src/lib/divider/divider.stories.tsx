import { Story, Meta } from '@storybook/react';
import { Divider, DividerProps } from './divider';

export default {
  component: Divider,
  title: 'Divider'
} as Meta;

const Template: Story<DividerProps> = args => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
