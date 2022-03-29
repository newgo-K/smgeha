import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import {
  productWriteInitForm,
  productWriteInitSelect,
  productWriteModifyAsync,
  productWriteSetForm,
  productWriteUploadAsync,
} from 'lib/modules/write/actions';
import { reqWriteFormPacket, resWriteCategoryPacket } from 'lib/api/write';
import ProductWriteForm from 'components/productWrite/productWriteForm';
import { RouteChildrenProps, withRouter } from 'react-router-dom';

function ProductWriteFormContainer({ history }: RouteChildrenProps) {
  const dispatch = useDispatch();
  const { form, select } = useSelector(({ write }: RootState) => ({
    form: write.writeForm as reqWriteFormPacket,
    categories: write.category.success as resWriteCategoryPacket,
    select: write.select.success,
  }));

  useEffect(() => {
    // 페이지 나갈 때 폼 초기화
    return () => {
      dispatch(productWriteInitForm(null));
    };
  }, [dispatch]);

  // 제품 수정
  useEffect(() => {
    if (select) {
      dispatch(productWriteInitSelect({ value: select }));
    }
  }, [dispatch, select]);

  const onChange = useCallback(
    (
      e: React.ChangeEvent<{
        name: string;
        value: string;
      }>,
    ) => {
      let { name, value } = e.target;
      dispatch(productWriteSetForm({ key: name, value }));
    },
    [dispatch],
  );

  const onClick = useCallback(() => {
    try {
      // 제품 등록인가 수정인가 id 값으로 판별
      if (form.id > 0) {
        dispatch(productWriteModifyAsync.request(form));
      } else {
        dispatch(productWriteUploadAsync.request(form));
      }
      history.push('/');
    } catch (e: any) {
      console.log(e);
    }
  }, [dispatch, form, history]);

  return (
    <>
      <ProductWriteForm
        id={form.id}
        title={form.title}
        url={form.url}
        serial={form.serial}
        manufacture={form.manufacture}
        size={form.size}
        price={form.price}
        onChange={onChange}
        onClick={onClick}
      />
    </>
  );
}

export default withRouter(ProductWriteFormContainer);
