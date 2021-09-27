import { css } from '@emotion/react';
import HeaderContainer from 'containers/common/HeaderContainer';
import ProductsSideMenuContainer from 'containers/products/ProductsSideMenuContainer';
import ProductsViewContainer from 'containers/products/ProductsViewContainer';
import React from 'react';

/** `Products` 페이지는 제품 목록을 보여주는 페이지입니다. */
function ProductsPage() {
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
      <div
        css={css`
          display: flex;
          margin-top: 60px;
        `}
      >
        <div
          css={css`
            width: 15%;
            margin: 0 auto;
          `}
        >
          <ProductsSideMenuContainer />
        </div>

        <div
          css={css`
            width: 80%;
            margin: 0 auto;
          `}
        >
          <ProductsViewContainer />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;