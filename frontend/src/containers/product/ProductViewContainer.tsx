import Button from 'components/common/Button';
import PageTitle from 'components/common/PageTitle';
import CommonTemplate from 'components/common/template/CommonTemplate';
import ProductView from 'components/product/ProductView';
import Icon from 'lib/icon/Icon';
import { RootState } from 'lib/modules';
import { productSelectAsync } from 'lib/modules/product/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

function ProductViewContainer() {
  const dispacth = useDispatch();
  const { view } = useSelector(({ product }: RootState) => ({
    view: product.view.success,
  }));

  const history = useHistory();
  const { id }: any = useParams();

  useEffect(() => {
    dispacth(productSelectAsync.request({ id }));
  }, [dispacth, id]);

  const leftContent = () => (
    <Button variant="text" iconOnly onClick={() => history.go(-1)}>
      <Icon icon={'leftArrow'} />
    </Button>
  );

  return (
    <CommonTemplate>
      <PageTitle leftContent={leftContent} title="상세내용" />
      <ProductView {...view} />
    </CommonTemplate>
  );
}

export default ProductViewContainer;
