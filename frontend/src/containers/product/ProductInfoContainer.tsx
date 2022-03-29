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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { withRouter } from 'react-router-dom';
import { productWriteInitSelect } from 'lib/modules/write/actions';
import { reqWriteSelect } from 'lib/api/write';
import useScript from 'lib/hook/useScript';

declare global {
  let naver: any;
}

function ProductInfoContainer() {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { product, user } = useSelector(({ product, auth }: RootState) => ({
    product: product.info.success,
    user: auth.user,
  }));

  const history = useHistory();
  const { id } = useParams<{ id?: string }>();

  const mapLoad = useScript(
    `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_KEY}&submodules=geocoder`,
  );

  useEffect(() => {
    if (mapLoad) {
      setMapLoaded(mapLoad);
    }
  }, [mapLoad]);

  useEffect(() => {
    dispatch(productSelectAsync.request({ id } as any));
  }, [dispatch, id]);

  // 없는 정보라면 메인으로
  useEffect(() => {
    if (product) {
      if (product.id < 0) {
        history.push('/');
      }
    }
  }, [product, history]);

  const onEdit = async () => {
    const res = await reqWriteSelect({ id } as any);
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
          mapLoaded={mapLoaded}
          user={user}
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
