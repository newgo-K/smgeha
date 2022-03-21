import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import {
  productWriteCategoryAsync,
  productWriteSetForm,
} from 'lib/modules/write/actions';
import { resWriteCategoryPacket, ResWriteForm } from 'lib/api/write';
import ProductWriteSelect from 'components/productWrite/productWriteSelect';

function ProductWriteSelectContainer() {
  const dispatch = useDispatch();
  const { form, categories } = useSelector(({ write }: RootState) => ({
    form: write.writeForm as ResWriteForm,
    categories: write.category.success as resWriteCategoryPacket,
  }));

  useEffect(() => {
    if (form.productCode > 2) {
      dispatch(productWriteCategoryAsync.request(form.productCode));
    } else {
      dispatch(productWriteCategoryAsync.request(2));
    }
  }, [dispatch, form.productCode]);

  const onClick = useCallback(
    (id: number) => {
      dispatch(productWriteCategoryAsync.request(id));
    },
    [dispatch],
  );

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

  return (
    <>
      <ProductWriteSelect
        productCode={form.productCode}
        manufactureCode={form.manufactureCode}
        sizeCode={form.sizeCode}
        typeCode={form.typeCode}
        onClick={onClick}
        onChange={onChange}
        categories={categories}
      />
    </>
  );
}

export default ProductWriteSelectContainer;
