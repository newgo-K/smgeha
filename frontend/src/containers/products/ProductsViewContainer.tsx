import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import { productsInitAsync } from 'lib/modules/products';
import ProductsView from 'components/products/ProductsView';

function ProductsViewContainer() {
  const dispacth = useDispatch();
  const { data } = useSelector(({ products }: RootState) => ({
    data: products.viewData.success,
  }));

  useEffect(() => {
    dispacth(productsInitAsync.request(null));
  }, [dispacth]);

  useEffect(() => {}, [data]);

  return (
    <div>
      <ProductsView data={data} />
    </div>
  );
}

export default ProductsViewContainer;
