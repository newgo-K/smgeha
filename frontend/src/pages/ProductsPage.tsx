import { css } from '@emotion/react';
import CategoryContainer from 'containers/common/CategoryContainer';
import ProductListContainer from 'containers/products/ProductListContainer';
import React from 'react';
import ProductSubCategoryContainer from 'containers/products/ProductsSubCategoryContainer';
import { Desktop, Mobile } from 'lib/styles/common';

/** `Products` 페이지는 제품 전체 목록을 보여주는 페이지입니다. */
function ProductsPage() {
  return (
    <>
      <Desktop>
        <div
          css={css`
            margin: 0 auto;
            width: 1350px;
            background-color: white;
          `}
        >
          <div>
            <CategoryContainer />
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
        <CategoryContainer />
        <ProductSubCategoryContainer />
        <ProductListContainer />
      </Mobile>
    </>
  );
}

export default ProductsPage;
