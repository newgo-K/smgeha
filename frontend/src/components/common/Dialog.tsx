import React from 'react';
import { Dialog as MaterialDialog } from '@material-ui/core';
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { css } from '@emotion/react';
import { formWidth } from 'lib/styles/common';

export type DialogProps = {
  open?: boolean | undefined;
  pageTitle?: string;
  title?: string;
  content?: string;
  onClose?: (e: any) => void;
};

function Dialog({ open, pageTitle, title, content, onClose }: DialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <MaterialDialog
        css={css`
          .MuiDialog-paperWidthSm {
            max-width: calc(${formWidth('desktop')} - 20px);
          }
        `}
        open={open!}
        fullScreen={fullScreen}
        onClose={onClose}
      >
        <DialogTitle
          css={css`
            margin-top: 1.25rem !important;
          `}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText dangerouslySetInnerHTML={{ __html: content! }} />
        </DialogContent>
      </MaterialDialog>
    </div>
  );
}

export default Dialog;
