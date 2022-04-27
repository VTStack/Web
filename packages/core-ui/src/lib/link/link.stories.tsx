import { Story, Meta } from '@storybook/react';
import { Link, LinkProps } from './link';

export default {
  component: Link,
  title: 'Link'
};

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
