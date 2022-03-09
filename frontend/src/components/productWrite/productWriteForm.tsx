import { css } from '@emotion/react';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import TextField from 'components/common/TextField';
import Select from 'components/common/Select';
import React from 'react';
import { mediaQuery } from 'lib/styles/common';

function ProductWriteForm() {
  return (
    <Wrap>
      <Grid container spacing={4}>
        <Grid item sm={4} xs={12}>
          <Select />
        </Grid>
        <Grid item sm={4} xs={12}></Grid>
        <Grid item sm={4} xs={12}>
          <TextField name="title" placeholder="URL" maxWidth />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item sm={4} xs={12}>
          <TextField name="title" placeholder="제품명" maxWidth />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField name="title" placeholder="URL" maxWidth />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item sm={2} xs={12}>
          <TextField name="title" placeholder="시리얼" maxWidth />
        </Grid>
        <Grid item sm={2} xs={12}>
          <TextField name="title" placeholder="제조사" maxWidth />
        </Grid>
        <Grid item sm={2} xs={12}>
          <TextField name="title" placeholder="크기" maxWidth />
        </Grid>
        <Grid item sm={2} xs={12}>
          <TextField name="title" placeholder="가격" maxWidth />
        </Grid>
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 20px;

  ${mediaQuery('xs')} {
    padding: 10px;
  }
`;

export default ProductWriteForm;
