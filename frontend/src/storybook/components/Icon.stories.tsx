import React from 'react';
import { css } from '@emotion/core';
import Icon, { iconTypes } from 'lib/icon/Icon';

export default {
  title: 'Component/Icon',
  component: Icon,
};

export const icon = () => <Icon icon="pencil" />;
icon.story = {
  name: 'Default',
};

export const customSize = () => <Icon icon="pencil" size="4rem" />;

export const customColor = () => <Icon icon="pencil" color="orange" />;

export const customizedWithStyle = () => (
  <Icon icon="pencil" color="blue" size="5rem" />
);

export const listOfIcons = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map((icon: any) => (
        <li key={icon}>
          <Icon color="green" icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
