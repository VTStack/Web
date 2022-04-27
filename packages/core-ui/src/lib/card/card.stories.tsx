import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './card';

export default {
  component: Card,
  title: 'Card'
};

const Template: Story<CardProps> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
