import React from 'react';
import { Story } from '@storybook/react';
import TextField, { TextFieldProps } from 'components/common/TextField';
import styled from '@emotion/styled';

export default {
  title: 'Component/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
};

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {};

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
        <div className="desc">Outlined</div>
        <TextField />
      </div>
      <div>
        <div className="desc">Filled</div>
        <TextField variant="filled" />
      </div>
      <div>
        <div className="desc">Standard</div>
        <TextField variant="standard" />
      </div>
    </Wrap>
  );
};

export const Error = () => {
  return (
    <div>
      <TextField error={true} />
    </div>
  );
};

export const HelperText = () => {
  return (
    <Wrap>
      <div>
        <div className="desc">Standard</div>
        <TextField helperText={'텍스트 필드 아래 제공되는 텍스트입니다.'} />
      </div>
      <div>
        <div className="desc">Error</div>
        <TextField
          error={true}
          helperText={'텍스트 필드 아래 제공되는 텍스트입니다.'}
        />
      </div>
    </Wrap>
  );
};
