import React from 'react';
import {
  Dialog as MaterialDialog,
  DialogActionsProps,
} from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { css } from '@emotion/react';
import { formWidth } from 'lib/styles/common';
import Button from './Button';
import palette from 'lib/styles/palette';
import styled from '@emotion/styled';

export type AlertProps = {
  /** 얼럿 창 열기 `true` */
  open: boolean;
  /** 얼럿 타이틀 */
  title?: string;
  /** 얼럿 내용 */
  content?: string;
  /** 얼럿 확인 버튼 이벤트 함수 */
  onClick: (e: boolean) => void;
};

/**
 * `Alert` 컴포넌트는 팝업창을 대신합니다.
 * `oepn` 값이 `true` 일 경우 Alert 창이 노출됩니다.
 */
function Alert({ open, title, content, onClick }: AlertProps) {
  return (
    <div>
      <MaterialDialog css={styles} open={open} onClose={onClick}>
        <TitleWrap>{title}</TitleWrap>
        <ContentWrap dangerouslySetInnerHTML={{ __html: content! }} />
        <DialogActionsWithPadding>
          <Button variant="text" onClick={onClick}>
            확인
          </Button>
        </DialogActionsWithPadding>
      </MaterialDialog>
    </div>
  );
}

const styles = css`
  .MuiDialog-paper {
    margin: 0.625rem;
    padding: 1.25rem;
    padding-bottom: 2px;
  }
  .MuiDialog-paperWidthSm {
    max-width: calc(${formWidth('desktop')} - 40px);
  }
`;

const TitleWrap = styled.div`
  padding-bottom: 1.25rem;
  font-weight: 500;
`;

const ContentWrap = styled.div`
  color: ${palette.grey[4]};
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const DialogActionsWithPadding = (props: DialogActionsProps) => (
  <DialogActions
    css={css`
      padding: 0 !important;
    `}
    {...props}
  />
);

export default Alert;
