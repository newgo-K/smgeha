import Header from 'components/common/Header';
import { RootState } from 'lib/modules';
import { productCategoryInitAsync } from 'lib/modules/category/actions';
import {
  productsMainMenuSelect,
  productsMainMenuSelectAsync,
} from 'lib/modules/products/actions';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HeaderContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector(({ category }: RootState) => ({
    categories: category.productCategory.success,
  }));

  // 제품 카테고리 내용이 없을 경우 데이터 로드
  useEffect(() => {
    if (!categories) {
      dispatch(productCategoryInitAsync.request(null));
    }
  }, [categories, dispatch]);

  // 제품 카테고리 선택
  // 해당하는 code 전송 후 제품들 데이터 로드
  const onClick = useCallback(
    (code: number) => {
      dispatch(productsMainMenuSelectAsync.request({ code }));
      dispatch(productsMainMenuSelect(code));
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
