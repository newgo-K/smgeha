import React from 'react';
import { css } from '@emotion/react';
import {
  Checkbox as MaterialCheckbox,
  FormControlLabel,
} from '@material-ui/core';
import palette from 'lib/styles/palette';
import Icon from 'lib/icon/Icon';
import Button from './Button';
import styled from '@emotion/styled';

export type CheckboxProps = {
  /** 클래스 이름 */
  className?: string;
  name?: string;
  /** 좌측 체크 전 아이콘 */
  icon: string;
  /** 좌측 체크 후 아이콘 */
  checkedIcon: string;
  /** 우측 아이콘 */
  rightIcon?: string;
  /** 체크박스 텍스트 내용 */
  label?: string;
  /** 체크박스 전체 크기 */
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: any) => void;
  onChange?: any;
  checked?: boolean;
};

/**
 * `Checkbox` 컴포넌트는 체크 아이콘과 관련된 텍스트등을 나타냅니다.
 * 아이콘의 컬러는 Default `gray[3]`이며, Checked `main[4]`입니다.
 */
function Checkbox({
  className,
  name,
  size = 'medium',
  icon,
  checkedIcon,
  rightIcon,
  label,
  onClick,
  onChange,
  checked = false,
}: CheckboxProps) {
  return (
    <Wrap>
      <FormControlLabel
        css={[checkboxStyles, sizes[size]]}
        control={
          <MaterialCheckbox
            checked={checked}
            onChange={onChange}
            disableRipple
            color="default"
            className={className}
            name={name}
            icon={<Icon icon={icon as 'pencil'} color={palette.grey[3]} />}
            checkedIcon={
              <Icon icon={checkedIcon as 'pencil'} color={palette.main[4]} />
            }
          />
        }
        label={label}
      />
      {rightIcon && (
        <RightIconWrap>
          <Button variant="text" iconOnly onClick={onClick}>
            <Icon icon={rightIcon as 'pencil'} color={palette.grey[3]} />
          </Button>
        </RightIconWrap>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const sizes = {
  small: css`
    .MuiCheckbox-root {
      padding: 5px;
      width: 17px;
    }
    .MuiTypography-body1 {
      font-size: 13px;
      font-weight: 400;
    }
  `,
  medium: css`
    .MuiTypography-body1 {
      font-size: 14px;
    }
  `,
  large: css`
    .MuiTypography-body1 {
      font-size: 1rem;
      font-weight: 500;
    }
  `,
};

const checkboxStyles = css`
  .MuiCheckbox-root {
    &:hover {
      background-color: transparent;
    }
  }
`;

const RightIconWrap = styled.div`
  position: absolute;
  right: 0;
`;

export default Checkbox;
