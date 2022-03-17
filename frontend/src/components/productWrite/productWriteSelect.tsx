import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import Select from 'components/common/Select';
import React, { useCallback, useEffect } from 'react';
import { mediaQuery } from 'lib/styles/common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import {
  productWriteCategoryAsync,
  productWriteSetForm,
} from 'lib/modules/write/actions';
import {
  ReqWriteForm,
  resWriteCategoryPacket,
  writeCategoryData,
} from 'lib/api/write';

function ProductWriteSelect() {
  const dispatch = useDispatch();
  const { form, categories } = useSelector(({ write }: RootState) => ({
    form: write.writeForm as ReqWriteForm,
    categories: write.category.success as resWriteCategoryPacket,
  }));

  useEffect(() => {
    dispatch(productWriteCategoryAsync.request(2));
  }, [dispatch]);

  const initCode = (product: boolean, list: Array<writeCategoryData>) => {
    if (list.length > 0) {
      if (product) return list[0].productCategoryId;
      else return list[0].code;
    }

    return 0;
  };

  const initFormCode = useCallback(
    (name: string, code: number) => {
      dispatch(
        productWriteSetForm({
          key: name,
          value: code,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    if (categories !== null) {
      const manufactureCode = initCode(
        false,
        categories.manufactureCategoryList,
      );
      const sizeCode = initCode(false, categories.sizeCategoryList);
      const typeCode = initCode(false, categories.typeCategoryList);

      initFormCode('manufactureCode', manufactureCode);
      initFormCode('sizeCode', sizeCode);
      initFormCode('typeCode', typeCode);
    }
  }, [categories, initFormCode]);

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
      console.log(e);
      dispatch(productWriteSetForm({ key: name, value }));
    },
    [dispatch],
  );

  return (
    <Wrap>
      <Grid container spacing={2}>
        {categories && (
          <>
            <Grid item sm={3} xs={12}>
              <Select
                name="productCode"
                code={form.productCode}
                onChange={onChange}
                label="제품"
                categories={categories.prodcutCategoryList}
                onClick={onClick}
              />
            </Grid>
            {form.manufactureCode !== 0 && (
              <Grid item sm={3} xs={12}>
                <Select
                  name="manufactureCode"
                  code={form.manufactureCode}
                  onChange={onChange}
                  label="제조사"
                  categories={categories.manufactureCategoryList}
                  onClick={undefined}
                />
              </Grid>
            )}
            {form.sizeCode !== 0 && (
              <Grid item sm={3} xs={12}>
                <Select
                  name="sizeCode"
                  code={form.sizeCode}
                  onChange={onChange}
                  label="크기"
                  categories={categories.sizeCategoryList}
                  onClick={undefined}
                />
              </Grid>
            )}
            {form.typeCode !== 0 && (
              <Grid item sm={3} xs={12}>
                <Select
                  name="typeCode"
                  code={form.typeCode}
                  onChange={onChange}
                  label="유형"
                  categories={categories.typeCategoryList}
                  onClick={undefined}
                />
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 20px 4px;

  ${mediaQuery('xs')} {
    padding: 10px;
  }
`;

export default ProductWriteSelect;
