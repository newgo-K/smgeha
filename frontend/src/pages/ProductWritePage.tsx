import { css } from '@emotion/react';
import { Grid } from '@material-ui/core';
import ProductWriteForm from 'components/productWrite/productWriteForm';
import ProductWriteSelect from 'components/productWrite/productWriteSelect';
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProductWriteSelect />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ImgUploadContainer />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ProductWriteForm />
        </Grid>
      </Grid>
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
