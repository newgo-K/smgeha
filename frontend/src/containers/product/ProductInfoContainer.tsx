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
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {
  reqProductDeletePacket,
  reqProductSelectPacket,
} from 'lib/api/product';
import { withRouter } from 'react-router-dom';
import {
  productWriteInitForm,
  productWriteSelectAsync,
} from 'lib/modules/write/actions';
import { reqWriteSelect } from 'lib/api/write';

function ProductInfoContainer() {
  const dispatch = useDispatch();
  const { product, write, select } = useSelector(
    ({ product, write }: RootState) => ({
      product: product.info.success,
      write: write.writeForm,
      select: write.select.success,
    }),
  );

  const history = useHistory();
  const { id }: any = useParams();

  useEffect(() => {
    dispatch(productSelectAsync.request({ id } as reqProductSelectPacket));
  }, [dispatch, id]);

  const onEdit = async () => {
    await dispatch(productWriteSelectAsync.request(id));
  };

  useEffect(() => {
    if (select) {
      dispatch(productWriteInitForm({ value: select }));
      history.push(`/write/${id}`);
    }
  });

  const onDelete = useCallback(() => {
    try {
      dispatch(productDelectAsync.request({ id } as reqProductDeletePacket));
      history.push('/');
    } catch (e: string | unknown) {
      console.log(e);
    }
  }, [dispatch, id, history]);

  const leftContent = () => (
    <Button variant="text" iconOnly onClick={() => history.go(-1)}>
      <Icon icon={'leftArrow'} />
    </Button>
  );

  return (
    <CommonTemplate>
      <PageTitle leftContent={leftContent} title="상세내용" />
      <ProductInfo onEdit={onEdit} onDelete={onDelete} {...product} />
    </CommonTemplate>
  );
}

export default withRouter(ProductInfoContainer);
