import { css } from '@emotion/react';
import HeaderContainer from 'containers/common/HeaderContainer';
import EditorContainer from 'containers/write/EditorContainer';
import ImgUploadContainer from 'containers/write/ImgUploadContainer';
import SelectTypeContainer from 'containers/write/SelectTypeContainer';
import React from 'react';

function ProductWritePage() {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 1350px;
        background-color: white;
      `}
    >
      <div>
        <HeaderContainer />
      </div>
      <div>
        <SelectTypeContainer />
      </div>
      <div>
        <ImgUploadContainer />
      </div>
      <div
        css={css`
          margin-top: 60px;
        `}
      >
        <EditorContainer />
      </div>
    </div>
  );
}

export default ProductWritePage;
