import React from 'react';
import { css } from '@emotion/react';
import { Button as MaterialButton } from '@material-ui/core';
import palette from 'lib/styles/palette';

export type ButtonProps = {
  /** 클래스 이름 */
  className?: string;
  /** 내용 */
  children: React.ReactNode;
  /** 타입 */
  type?: 'submit' | 'button' | 'reset';
  /** 모양 */
  variant?: 'contained' | 'outlined' | 'text';
  /** 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 너비 */
  width?: string | number;
  /** `true`일 때 너비 최대 */
  maxWidth?: boolean;
  /** 사용 가능 여부 */
  disabled?: boolean;
  /** 아이콘만 보여줄 때 값을 `true`로 설정 */
  iconOnly?: boolean;
  /** 링크 주소 */
  to?: string;
  /** onClick 이벤트 함수 */
  onClick?: (e: any) => void;
  href?: string;
};

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.
 * undefined 체크 시 오류가 발생하오니 체크하지 마십시오.
 */
function Button({
  className,
  children,
  type = 'button',
  variant = 'contained',
  size = 'medium',
  width,
  maxWidth,
  disabled,
  iconOnly,
  to,
  href,
  onClick,
}: ButtonProps) {
  return (
    <DefaultButton
      css={[
        sizes[size],
        { width },
        maxWidth && maxWidthStyle,
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      className={className}
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      href={href}
    >
      {children}
    </DefaultButton>
  );
}

const DefaultButton = (props: ButtonProps) => (
  <div
    css={css`
      .MuiButton-root {
        min-width: inherit;
        font-weight: 400 !important;
        color: ${palette.black};
        box-shadow: none;
      }
      .MuiButton-contained {
        color: ${palette.white};
        background-color: ${palette.main[4]};

        &:hover {
          background-color: ${palette.main[5]};
          box-shadow: none;
        }

        &.Mui-disabled {
          color: ${palette.grey[4]};
          background-color: ${palette.grey[2]};
        }
      }
      .MuiButton-outlined {
        color: ${palette.main[4]};
        background-color: ${palette.white};
        border: 1px solid ${palette.main[4]};

        &:hover {
          background-color: ${palette.white};
        }
      }

      .MuiButton-text {
        color: ${palette.main[4]};
        padding: 8px !important;
        &:hover {
          background-color: transparent;
        }
      }
    `}
  >
    <MaterialButton disableRipple {...props} />
  </div>
);

const sizes = {
  small: css`
    font-size: 0.8125rem !important;
    height: 2.1875rem;
    padding: 5px 8px !important;
  `,
  medium: css`
    font-size: 0.9375rem !important;
    height: 2.5rem;
  `,
  large: css`
    font-size: 1rem !important;
    font-weight: 700 !important;
    height: 3rem;
  `,
};

const maxWidthStyle = css`
  min-width: 100% !important;
`;

const iconOnlyStyle = css`
  padding: 0 !important;
  border-radius: 50% !important;
  svg {
    margin: 0 !important;
  }
`;

const iconOnlySizes = {
  small: css`
    min-width: 2rem !important;
    height: 2rem;
  `,
  medium: css`
    min-width: 2.5rem !important;
    height: 2.5rem;
  `,
  large: css`
    width: 3rem !important;
  `,
};

export default Button;
