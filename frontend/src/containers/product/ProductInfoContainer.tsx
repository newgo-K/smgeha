import Button from 'components/common/Button';
import PageTitle from 'components/common/PageTitle';
import CommonTemplate from 'components/common/template/CommonTemplate';
import ProductInfo from 'components/product/ProductInfo';
import Icon from 'lib/icon/Icon';
import { RootState } from 'lib/modules';
import { productSelectAsync } from 'lib/modules/product/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { reqProductSelectPacket } from 'lib/api/product';

function ProductInfoContainer() {
  const dispacth = useDispatch();
  const { product } = useSelector(({ product }: RootState) => ({
    product: product.info.success,
  }));

  const history = useHistory();
  const { id }: any = useParams();

  useEffect(() => {
    dispacth(productSelectAsync.request({ id } as reqProductSelectPacket));
  }, [dispacth, id]);

  const leftContent = () => (
    <Button variant="text" iconOnly onClick={() => history.go(-1)}>
      <Icon icon={'leftArrow'} />
    </Button>
  );

  return (
    <CommonTemplate>
      <PageTitle leftContent={leftContent} title="상세내용" />
      <ProductInfo {...product} />
    </CommonTemplate>
  );
}

export default ProductInfoContainer;
