import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import ProductList from 'components/products/ProductList';
import { RouteChildrenProps, withRouter } from 'react-router';
import { productsCategorySelectAsync } from 'lib/modules/products/actions';
import { reqProductsCategorySelectPacket } from 'lib/api/products';

function ProductsViewContainer({ history }: RouteChildrenProps) {
  const dispatch = useDispatch();
  const { code, products } = useSelector(
    ({ category, products }: RootState) => ({
      code: category.productCategoryCode,
      products: products.list.success,
    }),
  );

  const onClick = (id: number) => {
    history.push(`/product/${id}`);
  };

  useEffect(() => {
    dispatch(
      productsCategorySelectAsync.request({
        code,
      } as reqProductsCategorySelectPacket),
    );
  }, [dispatch, code]);

  return (
    <>{products && <ProductList products={products} onClick={onClick} />}</>
  );
}

export default withRouter(ProductsViewContainer);
