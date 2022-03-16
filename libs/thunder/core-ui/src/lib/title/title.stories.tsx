import { Story, Meta } from '@storybook/react';
import { Title, TitleProps } from './title';

export default {
  component: Title,
  title: 'Title'
} as Meta;

const Template: Story<TitleProps> = args => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
