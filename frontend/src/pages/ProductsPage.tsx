import { css } from '@emotion/react';
import HeaderContainer from 'containers/common/HeaderContainer';
import ProductListContainer from 'containers/products/ProductListContainer';
import React from 'react';
import ProductSubCategoryContainer from 'containers/products/ProductsSubCategoryContainer';
import { Desktop, Mobile } from 'lib/styles/common';
import palette from 'lib/styles/palette';

/** `Products` 페이지는 제품 전체 목록을 보여주는 페이지입니다. */
function ProductsPage() {
  return (
    <>
      <Desktop>
        <div
          css={css`
            margin: 0 auto;
            min-width: 768px;
            max-width: 1350px;
            background-color: white;
          `}
        >
          <div>
            <HeaderContainer />
          </div>
          <div
            css={css`
              display: flex;
              margin-top: 40px;
            `}
          >
            <div
              css={css`
                width: 15%;
                margin: 0 auto;
              `}
            >
              <ProductSubCategoryContainer />
            </div>

            <div
              css={css`
                width: 80%;
                margin: 0 auto;
              `}
            >
              <ProductListContainer />
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div
          css={css`
            border: 1px solid ${palette.grey[3]};
            min-width: 360px;
            max-width: 360px;
            margin: 0 auto;
          `}
        >
          <HeaderContainer />
          <ProductSubCategoryContainer />
          <ProductListContainer />
        </div>
      </Mobile>
    </>
  );
}

export default ProductsPage;
