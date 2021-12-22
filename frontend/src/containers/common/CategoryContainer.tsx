import Header from 'components/common/Header';
import { resProductCategoryPacket } from 'lib/api/category';
import { RootState } from 'lib/modules';
import {
  productCategoryCode,
  productCategoryInitAsync,
} from 'lib/modules/category/actions';
import { productsCategorySelectAsync } from 'lib/modules/products/actions';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const enum CATEGORY {
  INTRODUCE = 1,
}

export type HeaderPorps = {
  categories: Array<resProductCategoryPacket> | null;
  drawerFlag: boolean;
  onClick: (e: number) => void;
  toggleDrawer: (e: boolean) => void;
};

function HeaderContainer() {
  const dispatch = useDispatch();
  const { categories } = useSelector(({ category }: RootState) => ({
    categories: category.productCategory.success,
  }));

  const [drawerFlag, setDrawerFlag] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerFlag(open);
  };

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
    <>
      <Header
        categories={categories}
        drawerFlag={drawerFlag}
        onClick={onClick}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}

export default HeaderContainer;
