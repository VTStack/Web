import { Story, Meta } from '@storybook/react';
import { Button, Props } from './button';

export default {
  component: Button,
  title: 'Button'
};

const Template: Story<Props> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'tesing'
};
