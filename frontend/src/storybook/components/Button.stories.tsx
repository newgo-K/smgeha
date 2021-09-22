import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from '../../components/common/Button';
import styled from '@emotion/styled';
import Icon from 'lib/icon/Icon';

export default {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'BUTTON',
};

const Wrap = styled.div`
  .desc {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const Variants = () => {
  return (
    <Wrap>
      <div>
        <div className="desc">Contained</div>
        <Button>CONTAINED</Button>
      </div>
      <div>
        <div className="desc">Outlined</div>
        <Button variant="outlined">OUTLINED</Button>
      </div>
      <div>
        <div className="desc">Text</div>
        <Button variant="text">TEXT</Button>
      </div>
    </Wrap>
  );
};

export const sizes = () => {
  return (
    <Wrap>
      <div>
        <div className="desc">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="desc">Medium</div>
        <Button>BUTTON</Button>
      </div>
      <div>
        <div className="desc">Large</div>
        <Button size="large">BUTTON</Button>
      </div>
    </Wrap>
  );
};

export const iconOnly = () => {
  return (
    <Wrap>
      <div>
        <div className="desc">Contained</div>
        <Button iconOnly>
          <Icon icon="pencil" />
        </Button>
      </div>
      <div>
        <div className="desc">Outlined</div>
        <Button variant="outlined" iconOnly>
          <Icon icon="pencil" />
        </Button>
      </div>
      <div>
        <div className="desc">Text</div>
        <Button variant="text" iconOnly>
          <Icon icon="pencil" />
        </Button>
      </div>
    </Wrap>
  );
};
