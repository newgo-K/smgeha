import Header from 'components/common/Header';
import { RootState } from 'lib/modules';
import {
  productCategoryCode,
  productCategoryInitAsync,
} from 'lib/modules/category/actions';
import { productsCategorySelectAsync } from 'lib/modules/products/actions';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const enum CATEGORY {
  INTRODUCE = 1,
}

function HeaderContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector(({ category }: RootState) => ({
    categories: category.productCategory.success,
  }));

  // 제품 카테고리 내용이 없을 경우 카테고리와 제품 목록 로드
  // 업체 소개일 경우 프론트단에서 처리
  useEffect(() => {
    if (!categories) {
      const code = CATEGORY.INTRODUCE + 1;

      dispatch(productCategoryInitAsync.request(null));
      dispatch(productsCategorySelectAsync.request({ code }));
      dispatch(productCategoryCode(code));
    }
  }, [categories, dispatch]);

  // 제품 카테고리 선택
  // 해당하는 code 전송 후 제품 목록 로드
  const onClick = useCallback(
    (code: number) => {
      if (code !== CATEGORY.INTRODUCE) {
        dispatch(productsCategorySelectAsync.request({ code }));
        dispatch(productCategoryCode(code));
      }
    },
    [dispatch],
  );

  return (
    <div>
      <Header categories={categories} onClick={onClick} />
    </div>
  );
}

export default HeaderContainer;
