import { Story, Meta } from '@storybook/react';
import { Input } from './input';

export default {
  component: Input,
  title: 'Input'
} as Meta;

const Template: Story = args => <Input />;

export const Primary = Template.bind({});
Primary.args = {};
