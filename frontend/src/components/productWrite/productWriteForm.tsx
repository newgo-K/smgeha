import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import TextField from 'components/common/TextField';
import React from 'react';
import { mediaQuery } from 'lib/styles/common';

import Button from 'components/common/Button';

type ProductWriteSelectProps = {
  id: number;
  title: string;
  serial: string;
  url: string;
  manufacture: string;
  size: string;
  price: number;
  onChange: (
    e: React.ChangeEvent<{
      name: string;
      value: string;
    }>,
  ) => void;
  onClick: () => void;
};

function ProductWriteForm({
  id,
  title,
  url,
  serial,
  manufacture,
  size,
  price,
  onChange,
  onClick,
}: ProductWriteSelectProps) {
  return (
    <Wrap>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="title"
            placeholder="제품명"
            defaultValue={title}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="url"
            placeholder="URL"
            defaultValue={url}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="serial"
            placeholder="시리얼"
            defaultValue={serial}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="manufacture"
            placeholder="제조사"
            defaultValue={manufacture}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="size"
            placeholder="크기"
            defaultValue={size}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="price"
            placeholder="가격"
            defaultValue={String(price)}
            maxWidth
            onChange={onChange}
          />
        </Grid>
      </Grid>
      <ButtonStyles>
        <Grid item sm={4} xs={12}>
          <Button size="large" maxWidth onClick={onClick}>
            {id === 0 ? '저장' : '수정'}
          </Button>
        </Grid>
      </ButtonStyles>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 1.25rem;

  ${mediaQuery('xs')} {
    padding: 0.625rem;
  }
`;

const ButtonStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.9375rem 0;
`;

export default ProductWriteForm;
