import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';
import ImgUploadContainer from 'containers/write/ImgUploadContainer';
import ProductWriteFormContainer from 'containers/write/ProductWriteFormContainer';
import ProductWriteSelectContainer from 'containers/write/ProductWriteSelectContainer';
import { mediaQuery } from 'lib/styles/common';
import palette from 'lib/styles/palette';
import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';

function ProductWritePage() {
  return (
    <Wrap>
      <div>
        <HeaderContainer />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProductWriteSelectContainer />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ImgUploadContainer />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ProductWriteFormContainer />
        </Grid>
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1350px;
  margin: 0 auto;
  background-color: ${palette.white[0]};

  ${mediaQuery('xs')} {
    width: 360px;
  }
`;

export default ProductWritePage;
