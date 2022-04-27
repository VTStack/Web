import { Story, Meta } from '@storybook/react';
import { Modal, ModalProps } from './modal';

export default {
  component: Modal,
  title: 'Modal'
};

const Template: Story<ModalProps> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
