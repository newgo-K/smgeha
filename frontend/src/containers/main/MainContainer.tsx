import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import { productsAsync } from 'lib/modules/product';
import HeaderContainer from 'containers/common/HeaderContainer';

function MainContainer() {
  const dispacth = useDispatch();
  const { data } = useSelector(({ products }: RootState) => ({
    data: products.products.data,
  }));

  useEffect(() => {
    dispacth(productsAsync.request(null));
  }, [dispacth]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <HeaderContainer />
    </div>
  );
}

export default MainContainer;
