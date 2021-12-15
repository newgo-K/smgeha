import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import ProductList from 'components/products/ProductList';

function MainContainer() {
  const { products } = useSelector(({ products }: RootState) => ({
    products: products.list.success,
  }));

  const onClick = null;

  return (
    <div>
      <ProductList products={products} onClick={onClick} />
    </div>
  );
}

export default MainContainer;
