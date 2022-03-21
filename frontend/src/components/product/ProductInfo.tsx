import { css } from '@emotion/react';
import palette from 'lib/styles/palette';
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import ProductImgCarousel from './ProductImgCarousel';
import { formWidth, mediaQuery } from 'lib/styles/common';
import Button, { ButtonProps } from 'components/common/Button';

export type ProductInfoProps = {
  name: string;
  serial: string;
  size: string;
  manufacture: string;
  price: number;
  url: string;
  subTypes: string;
  imgs: Array<string>;
  onEdit: () => void;
  onDelete: () => void;
};

function ProductInfo({
  name,
  serial,
  size,
  manufacture,
  price,
  url,
  subTypes,
  imgs,
  onEdit,
  onDelete,
}: ProductInfoProps) {
  const [type, setType] = useState<string>('');

  useEffect(() => {
    if (subTypes) {
      setType(subTypes.split(',')[2]);
    }
  }, [subTypes]);

  return (
    <Wrap>
      <ModifyBtnStyles
        variant="outlined"
        size="large"
        maxWidth
        onClick={onEdit}
      >
        수정
      </ModifyBtnStyles>
      <DeleteBtnStyles
        variant="outlined"
        size="large"
        maxWidth
        onClick={onDelete}
      >
        삭제
      </DeleteBtnStyles>
      <Title>
        <Typography variant="h1">{name}</Typography>
      </Title>
      <ContentWrap>
        <Grid item xs={7}>
          {/* Carousel */}
          <ProductImgCarousel imgs={imgs} />
        </Grid>
        <Grid item xs={5}>
          {/* Content */}
          <ContentTitle>시리얼</ContentTitle>
          <ContentSub>{serial}</ContentSub>
          <ContentTitle>제조사</ContentTitle>
          <ContentSub>{manufacture}</ContentSub>
          <ContentTitle>크기</ContentTitle>
          <ContentSub>{size}</ContentSub>
          <ContentTitle>유형</ContentTitle>
          <ContentSub>{type}</ContentSub>
          {price && (
            <ContentPrice>
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </ContentPrice>
          )}
        </Grid>
      </ContentWrap>

      {/* 블로그 내용이 없다면 제품 소개란은 보여주지 않는다. */}
      {url && (
        <>
          <GuideDetail>
            <Typography variant="subtitle1">제품 소개</Typography>
          </GuideDetail>
          {/* 블로그 연동 시 보여주는 영역 */}
          <iframe title={url} width="100%" height="500" src={url} />
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 430px;
  margin-top: 4.375rem;

  ${mediaQuery('xs')} {
    width: ${formWidth()};
  }
`;

const ModifyBtnStyles = (props: ButtonProps) => (
  <Button
    css={css`
      margin-bottom: 0.625rem !important;
    `}
    {...props}
  />
);

const DeleteBtnStyles = (props: ButtonProps) => (
  <Button
    css={css`
      margin-bottom: 0.625rem !important;
      border: 1px solid red !important;
      color: red !important;
    `}
    {...props}
  />
);

const ContentWrap = styled.div`
  display: flex;
`;

const Title = styled.div`
  padding-top: 5px;
  padding-bottom: 20px;
`;

const ContentTitle = (props: any) => (
  <div
    css={css`
      color: ${palette.grey[8]} !important;
      line-height: 1;
    `}
  >
    <Typography variant="subtitle1" {...props} />
  </div>
);

const ContentSub = (props: any) => (
  <div
    css={css`
      color: ${palette.grey[4]} !important;
    `}
  >
    <Typography variant="subtitle1" {...props} />
  </div>
);

const ContentPrice = styled.div`
  padding: 0.3125rem 0;
  color: ${palette.main[4]};
  font-weight: 500;
  font-size: 1.125rem;
`;

const GuideDetail = styled.div`
  margin-top: 2.5rem;
  padding: 0.125rem 0.4375rem;
  color: ${palette.white[0]};
  background-color: ${palette.black[0]};
`;

export default ProductInfo;
