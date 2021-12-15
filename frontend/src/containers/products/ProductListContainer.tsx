import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import ProductList from 'components/products/ProductList';
import { RouteChildrenProps, withRouter } from 'react-router';

function ProductsViewContainer({ history }: RouteChildrenProps) {
  const { products } = useSelector(({ products }: RootState) => ({
    products: products.list.success,
  }));

  const onClick = useCallback(
    (id: number) => {
      history.push(`/product/${id}`);
    },
    [history],
  );

  return <ProductList products={products} onClick={onClick} />;
}

export default withRouter(ProductsViewContainer);
