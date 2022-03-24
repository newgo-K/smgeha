import Button from 'components/common/Button';
import PageTitle from 'components/common/PageTitle';
import CommonTemplate from 'components/common/template/CommonTemplate';
import ProductInfo from 'components/product/ProductInfo';
import Icon from 'lib/icon/Icon';
import { RootState } from 'lib/modules';
import {
  productDelectAsync,
  productSelectAsync,
} from 'lib/modules/product/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {} from 'lib/api/product';
import { withRouter } from 'react-router-dom';
import { productWriteInitSelect } from 'lib/modules/write/actions';
import { reqWriteSelect } from 'lib/api/write';

declare global {
  let naver: any;
}

function ProductInfoContainer() {
  const dispatch = useDispatch();
  const { product } = useSelector(({ product, naverMap }: RootState) => ({
    product: product.info.success,
  }));

  const history = useHistory();
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    dispatch(productSelectAsync.request({ id } as any));
  }, [dispatch, id]);

  const onEdit = async () => {
    const res = await reqWriteSelect(id);
    dispatch(productWriteInitSelect({ value: res }));
    history.push(`/write/${id}`);
  };

  const onDelete = () => {
    try {
      dispatch(productDelectAsync.request({ id } as any));
      history.push('/');
    } catch (e: string | unknown) {
      console.log(e);
    }
  };

  const leftContent = () => (
    <Button variant="text" iconOnly onClick={() => history.go(-1)}>
      <Icon icon={'leftArrow'} />
    </Button>
  );

  return (
    <CommonTemplate>
      <PageTitle leftContent={leftContent} title="상세내용" />
      {product && (
        <ProductInfo
          name={product.name}
          serial={product.serial}
          size={product.size}
          manufacture={product.manufacture}
          price={product.price}
          url={product.url}
          subTypes={product.subTypes}
          imgs={product.subImages}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </CommonTemplate>
  );
}

export default withRouter(ProductInfoContainer);
