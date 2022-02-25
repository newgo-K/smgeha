import { css } from '@emotion/react';
import { TextField as MaterialTextField } from '@material-ui/core';
import palette from 'lib/styles/palette';
import React from 'react';

export type TextFieldProps = {
  /** 사용 값 */
  name?: string;
  type?: 'password' | 'number';
  /** 내용 */
  value?: string;
  /** 형태 */
  variant?: 'outlined' | 'filled' | 'standard';
  width?: string | number;
  /** `true`일 때 너비 최대 */
  maxWidth?: boolean;
  /** 안내 문구 */
  placeholder?: string;
  /** 에러 설정 `true`일 때 작동*/
  error?: boolean;
  /** 텍스트필드 아래 제공되는 텍스트 */
  helperText?: string;
  /** 텍스트필드에 값이 입력됐을 때 호출되는 함수 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  InputProps?: any;
  inputProps?: any;
};

/**
 * `TextField` 컴포넌트는 텍스트 입력이 필요할 때 사용합니다.
 * undefined 체크 시 오류가 발생하오니 체크하지 마십시오.
 */
function TextField({
  name,
  type,
  value,
  variant = 'standard',
  width,
  maxWidth,
  placeholder,
  error,
  helperText,
  onChange,
  InputProps,
  inputProps,
}: TextFieldProps) {
  return (
    <DefaultTextField
      css={[{ width }, maxWidth && maxWidthStyle]}
      name={name}
      type={type}
      value={value}
      variant={variant}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      onChange={onChange}
      InputProps={InputProps}
      inputProps={inputProps}
    />
  );
}

const DefaultTextField = (props: TextFieldProps) => (
  <div
    css={css`
      .MuiInput-underline {
        &::before {
          border-bottom: 2px solid ${palette.grey[2]};
        }

        &:hover:not(.Mui-disabled):before {
          border-bottom: 1px solid ${palette.black};
        }

        &::after {
          border-bottom: 2px solid ${palette.grey[7]};
        }
      }

      .MuiOutlinedInput-root {
        .MuiOutlinedInput-input {
          padding: 0.5rem;
        }
        .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${palette.grey[2]};
        }
        &:hover fieldset {
          border: 1px solid ${palette.grey[2]};
        }
      }

      .MuiOutlinedInput-root.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${palette.grey[4]};
        }
      }

      .MuiOutlinedInput-root.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${palette.grey[4]};
        }
      }

      .Mui-error {
        &:hover fieldset {
          border: 1px solid ${palette.error[1]};
        }
      }

      .MuiFormHelperText-contained {
        margin: 0.25rem 0;
      }
    `}
  >
    <MaterialTextField {...props} />
  </div>
);

const maxWidthStyle = css`
  min-width: 100% !important;
`;

export default TextField;
