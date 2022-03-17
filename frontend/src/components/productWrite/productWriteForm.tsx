import { css } from '@emotion/react';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import TextField from 'components/common/TextField';
import Select from 'components/common/Select';
import React, { useCallback, useEffect } from 'react';
import { mediaQuery } from 'lib/styles/common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import {
  productWriteCategoryAsync,
  productWriteSetForm,
  productWriteUploadAsync,
} from 'lib/modules/write/actions';
import {
  ReqWriteForm,
  resWriteCategoryPacket,
  writeCategoryData,
} from 'lib/api/write';
import Button from 'components/common/Button';

function ProductWriteForm() {
  const dispatch = useDispatch();
  const { form, categories } = useSelector(({ write }: RootState) => ({
    form: write.writeForm as ReqWriteForm,
    categories: write.category.success as resWriteCategoryPacket,
  }));

  useEffect(() => {
    dispatch(productWriteCategoryAsync.request(2));
  }, [dispatch]);

  const onClick = useCallback(() => {
    dispatch(productWriteUploadAsync.request(form));
  }, [dispatch, form]);

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="title"
            placeholder="제품명"
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="url"
            placeholder="URL"
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="serial"
            placeholder="시리얼"
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="manufacture"
            placeholder="제조사"
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="size"
            placeholder="크기"
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="price"
            placeholder="가격"
            maxWidth
            onChange={onChange}
          />
        </Grid>
      </Grid>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          margin: 15px 0;
        `}
      >
        <Grid item sm={4} xs={12}>
          <Button size="large" maxWidth onClick={onClick}>
            저장
          </Button>
        </Grid>
      </div>
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
