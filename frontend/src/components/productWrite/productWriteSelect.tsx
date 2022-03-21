import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import Select from 'components/common/Select';
import React from 'react';
import { mediaQuery } from 'lib/styles/common';
import { resWriteCategoryPacket } from 'lib/api/write';

type ProductWriteSeleteProps = {
  productCode: number;
  manufactureCode: number;
  sizeCode: number;
  typeCode: number;
  categories: resWriteCategoryPacket;
  onClick: (id: number) => void;
  onChange: (
    e: React.ChangeEvent<{
      name: string;
      value: string;
    }>,
  ) => void;
};

function ProductWriteSelect({
  productCode,
  manufactureCode,
  sizeCode,
  typeCode,
  onClick,
  onChange,
  categories,
}: ProductWriteSeleteProps) {
  return (
    <Wrap>
      <Grid container spacing={2}>
        {categories && (
          <>
            <Grid item sm={3} xs={12}>
              <Select
                name="productCode"
                code={productCode}
                onChange={onChange}
                label="제품"
                categories={categories.prodcutCategoryList}
                onClick={onClick}
              />
            </Grid>
            {manufactureCode !== 0 && (
              <Grid item sm={3} xs={12}>
                <Select
                  name="manufactureCode"
                  code={manufactureCode}
                  onChange={onChange}
                  label="제조사"
                  categories={categories.manufactureCategoryList}
                />
              </Grid>
            )}
            {sizeCode !== 0 && (
              <Grid item sm={3} xs={12}>
                <Select
                  name="sizeCode"
                  code={sizeCode}
                  onChange={onChange}
                  label="크기"
                  categories={categories.sizeCategoryList}
                />
              </Grid>
            )}
            {typeCode !== 0 && (
              <Grid item sm={3} xs={12}>
                <Select
                  name="typeCode"
                  code={typeCode}
                  onChange={onChange}
                  label="유형"
                  categories={categories.typeCategoryList}
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
  padding: 1.25rem 0.25rem;

  ${mediaQuery('xs')} {
    padding: 0.625rem;
  }
`;

export default ProductWriteSelect;
