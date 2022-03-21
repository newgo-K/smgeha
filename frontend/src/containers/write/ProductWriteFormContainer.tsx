import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import {
  productWriteInitForm,
  productWriteModifyAsync,
  productWriteSetForm,
  productWriteUploadAsync,
} from 'lib/modules/write/actions';
import { ReqWriteForm, resWriteCategoryPacket } from 'lib/api/write';
import ProductWriteForm from 'components/productWrite/productWriteForm';
import { RouteChildrenProps, useParams, withRouter } from 'react-router-dom';

function ProductWriteFormContainer({ history }: RouteChildrenProps) {
  const dispatch = useDispatch();
  const { form, select } = useSelector(({ write }: RootState) => ({
    form: write.writeForm as ReqWriteForm,
    categories: write.category.success as resWriteCategoryPacket,
    select: write.select.success,
  }));

  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (select) {
      dispatch(productWriteInitForm({ value: select }));
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
      if (id === '0') {
        dispatch(productWriteUploadAsync.request(form));
      } else {
        dispatch(productWriteModifyAsync.request(form));
      }

      history.push('/');
    } catch (e: any) {
      console.log(e);
    }
  }, [dispatch, form, id, history]);

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
