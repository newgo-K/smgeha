import { css } from '@emotion/react';
import ProductWriteForm from 'components/productWrite/productWriteForm';
import SelectInputForm from 'components/productWrite/SelectInputForm';
import CategoryContainer from 'containers/common/CategoryContainer';
import EditorContainer from 'containers/write/EditorContainer';
import ImgUploadContainer from 'containers/write/ImgUploadContainer';
import SelectTypeContainer from 'containers/write/SelectTypeContainer';
import { mediaQuery } from 'lib/styles/common';
import React from 'react';

function ProductWritePage() {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 1350px;
        background-color: white;

        ${mediaQuery('xs')} {
          width: 360px;
        }
      `}
    >
      <div>
        <CategoryContainer />
      </div>
      <ProductWriteForm />

      {/* <div>
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
      </div> */}
    </div>
  );
}

export default ProductWritePage;
