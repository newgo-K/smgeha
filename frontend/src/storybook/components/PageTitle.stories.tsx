import React from 'react';
import { Story } from '@storybook/react';
import PageTitle, { PageTitleProps } from 'components/common/PageTitle';

export default {
  title: 'Component/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
};

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  // leftIconButton: 'leftArrow',
  title: '타이틀',
};
