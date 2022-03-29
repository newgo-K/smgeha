import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import {
  productWriteCategoryAsync,
  productWriteSetForm,
} from 'lib/modules/write/actions';
import {
  resWriteCategoryPacket,
  resWriteFormPacket,
  reqWriteCategoryPacket,
} from 'lib/api/write';
import ProductWriteSelect from 'components/productWrite/productWriteSelect';
import { CATEGORY } from 'lib/common/commonLib';

function ProductWriteSelectContainer() {
  const dispatch = useDispatch();
  const { form, categories } = useSelector(({ write }: RootState) => ({
    form: write.writeForm as resWriteFormPacket,
    categories: write.category.success as resWriteCategoryPacket,
  }));

  useEffect(() => {
    let code = CATEGORY.INTRODUCE + 1;

    if (form.productCode > code) {
      code = form.productCode;
    }

    dispatch(
      productWriteCategoryAsync.request({ code } as reqWriteCategoryPacket),
    );
  }, [dispatch, form.productCode]);

  const onClick = useCallback(
    (code: number) => {
      dispatch(
        productWriteCategoryAsync.request({ code } as reqWriteCategoryPacket),
      );
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
