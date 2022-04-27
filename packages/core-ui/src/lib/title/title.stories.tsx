import { Story, Meta } from '@storybook/react';
import { Title, TitleProps } from './title';

export default {
  component: Title,
  title: 'Title'
};

const Template: Story<TitleProps> = args => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
