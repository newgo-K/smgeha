import React from 'react';
import { Story } from '@storybook/react';
import Dialog from 'components/common/Dialog';

export default {
  title: 'Component/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      inlineStories: false,
      iframeHeight: 900,
    },
  },
};

const Template: Story = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {};
