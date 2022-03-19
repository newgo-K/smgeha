import { css } from '@emotion/react';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import TextField from 'components/common/TextField';
import Select from 'components/common/Select';
import React, { useCallback, useEffect, useState } from 'react';
import { mediaQuery } from 'lib/styles/common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import {
  productWriteCategoryAsync,
  productWriteInitForm,
  productWriteModifyAsync,
  productWriteSetForm,
  productWriteUploadAsync,
} from 'lib/modules/write/actions';
import {
  ReqWriteForm,
  resWriteCategoryPacket,
  writeCategoryData,
} from 'lib/api/write';
import Button from 'components/common/Button';
import { withRouter } from 'react-router-dom';

function ProductWriteForm({ match }: any) {
  const [id, setId] = useState<number>(0);
  const dispatch = useDispatch();
  const { form, categories, select } = useSelector(({ write }: RootState) => ({
    form: write.writeForm as ReqWriteForm,
    categories: write.category.success as resWriteCategoryPacket,
    select: write.select.success,
  }));

  useEffect(() => {
    dispatch(productWriteCategoryAsync.request(2));
  }, [dispatch]);

  useEffect(() => {
    if (select) {
      setId(select.id);
      dispatch(productWriteInitForm({ value: select }));
    }
  }, [dispatch, select]);

  const onClick = useCallback(() => {
    if (id === 0) {
      dispatch(productWriteUploadAsync.request(form));
    } else {
      debugger;
      dispatch(productWriteModifyAsync.request(form));
    }
  }, [dispatch, form, id]);

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
            defaultValue={form.title}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="url"
            placeholder="URL"
            defaultValue={form.url}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="serial"
            placeholder="시리얼"
            defaultValue={form.serial}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="manufacture"
            placeholder="제조사"
            defaultValue={form.manufacture}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="size"
            placeholder="크기"
            defaultValue={form.size}
            maxWidth
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="price"
            placeholder="가격"
            defaultValue={String(form.price)}
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
            {id === 0 ? '저장' : '수정'}
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
