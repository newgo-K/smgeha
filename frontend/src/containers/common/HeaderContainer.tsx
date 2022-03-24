import Header from 'components/common/Header';
import { RootState } from 'lib/modules';
import {
  productCategoryCode,
  productCategoryInitAsync,
} from 'lib/modules/category/actions';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteChildrenProps, withRouter } from 'react-router-dom';

const enum CATEGORY {
  INTRODUCE = 1,
}

function HeaderContainer({ history }: RouteChildrenProps) {
  const dispatch = useDispatch();
  const { categories, user } = useSelector(({ category, auth }: RootState) => ({
    categories: category.productCategory.success,
    user: auth.user,
  }));

  const [drawerFlag, setDrawerFlag] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerFlag(open);
  };

  // 제품 카테고리 내용이 없을 경우 카테고리와 제품 목록 로드
  // 업체 소개일 경우 프론트단에서 처리
  useEffect(() => {
    if (!categories) {
      dispatch(productCategoryInitAsync.request(null));
    }
  }, [categories, dispatch]);

  // 제품 카테고리 선택
  // 해당하는 code 전송 후 제품 목록 로드
  const onClick = useCallback(
    (code: number) => {
      if (code !== CATEGORY.INTRODUCE) {
        dispatch(productCategoryCode(code));
        history.push('/');
      }
    },
    [dispatch, history],
  );

  const onWrite = () => {
    history.push('/write');
  };

  return (
    <>
      <Header
        categories={categories}
        drawerFlag={drawerFlag}
        user={user}
        onClick={onClick}
        toggleDrawer={toggleDrawer}
        onWrite={onWrite}
      />
    </>
  );
}

export default withRouter(HeaderContainer);
