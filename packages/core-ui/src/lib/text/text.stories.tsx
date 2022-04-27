import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './text';

export default {
  component: Text,
  title: 'Text'
};

const Template: Story<TextProps> = args => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
