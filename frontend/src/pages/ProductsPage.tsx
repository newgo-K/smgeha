import HeaderContainer from 'containers/common/HeaderContainer';
import ProductListContainer from 'containers/products/ProductListContainer';
import React from 'react';
import ProductSubCategoryContainer from 'containers/products/ProductsSubCategoryContainer';
import { Desktop, Mobile } from 'lib/styles/common';
import palette from 'lib/styles/palette';
import { Grid } from '@material-ui/core';
import Footer from 'components/common/Footer';
import styled from '@emotion/styled';

/** `Products` 페이지는 제품 전체 목록을 보여주는 페이지입니다. */
function ProductsPage() {
  return (
    <>
      <Desktop>
        <DesktopWrap>
          <div>
            <HeaderContainer />
          </div>
          <ContentWrap>
            <Grid container>
              <Grid item={true} sm={2}>
                <ProductSubCategoryContainer />
              </Grid>

              <Grid item={true} sm={10}>
                <ProductListContainer />
              </Grid>
            </Grid>
          </ContentWrap>
        </DesktopWrap>
        <Footer />
      </Desktop>

      <Mobile>
        <MobileWrap>
          <HeaderContainer />
          <ProductSubCategoryContainer />
          <ProductListContainer />
          <Footer />
        </MobileWrap>
      </Mobile>
    </>
  );
}

const DesktopWrap = styled.div`
  min-width: 768px;
  max-width: 1350px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 0.9375rem;
  background-color: ${palette.white[0]};
`;

const MobileWrap = styled.div`
  min-width: 360px;
  max-width: 360px;
  margin: 0 auto;
  background-color: ${palette.white[0]};
`;

const ContentWrap = styled.div`
  display: flex;
  margin-top: 2.5rem;
`;

export default ProductsPage;
