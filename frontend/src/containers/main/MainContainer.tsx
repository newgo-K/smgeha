import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import { productsAsync } from 'lib/modules/product';
import MainBody from 'components/main/MainBody';
import MainHeader from 'components/main/MainHeader';
import MainSideMenu from 'components/main/MainSideMenu';
import MainTest from 'components/main/Main';

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
      <MainTest data={data} />
    </div>
  );
}

export default MainContainer;
