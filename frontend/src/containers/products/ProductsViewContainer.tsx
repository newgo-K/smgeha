import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import { productsInitAsync } from 'lib/modules/products/actions';
import ProductsView from 'components/products/ProductsView';
import { RouteChildrenProps, withRouter } from 'react-router';

function ProductsViewContainer({ history }: RouteChildrenProps) {
  const dispatch = useDispatch();
  const { data } = useSelector(({ products }: RootState) => ({
    data: products.viewData.success,
  }));

  useEffect(() => {
    dispatch(productsInitAsync.request(null));
  }, [dispatch]);

  useEffect(() => {}, [data]);

  const onClick = useCallback(
    (id: number) => {
      history.push(`/product/${id}`);
    },
    [history],
  );

  const props = {
    data,
    onClick,
  };

  return <ProductsView {...props} />;
}

export default withRouter(ProductsViewContainer);
