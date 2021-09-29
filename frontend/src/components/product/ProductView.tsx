import { css } from '@emotion/react';
import palette from 'lib/styles/palette';
import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';

import ProductImgCarousel from './ProductImgCarousel';
import { formWidth, mediaQuery } from 'lib/styles/common';

function ProductView({ ...props }: any) {
  const {
    title,
    serial,
    manufactureText,
    sizeText,
    type,
    url,
    imgList,
  } = props;

  return (
    <Wrap>
      <Title>
        <Typography variant="h1">{title}</Typography>
      </Title>

      <div
        css={css`
          display: flex;
        `}
      >
        <Grid item xs={7}>
          <ProductImgCarousel imgList={imgList} />
        </Grid>
        <Grid item xs={5}>
          <ContentTitle>시리얼</ContentTitle>
          <ContentSub>{serial}</ContentSub>
          <ContentTitle>제조사</ContentTitle>
          <ContentSub>{manufactureText}</ContentSub>
          <ContentTitle>용량</ContentTitle>
          <ContentSub>{sizeText}</ContentSub>
          <ContentTitle>유형</ContentTitle>
          <ContentSub>{type}</ContentSub>
          <ContentPrice>520,000원</ContentPrice>
        </Grid>
      </div>
      <GuideDetail>
        <Typography variant="subtitle1">제품 소개</Typography>
      </GuideDetail>

      <p>
        {/* <iframe
          css={css`
            width: 100%;
            height: 500px;
          `}
          src={url}
        >
          이 브라우저는 iframe을 지원하지 않습니다
        </iframe> */}
      </p>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 70px;
  width: 430px;
  /* min-width: 360px; */

  ${mediaQuery('xs')} {
    padding: 0 10px;
    width: ${formWidth()};
  }
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
    <Typography variant="subtitle2" {...props} />
  </div>
);

const ContentPrice = styled.div`
  padding: 5px 0;
  color: ${palette.main[4]};
  font-weight: 500;
  font-size: 18px;
`;

const GuideDetail = styled.div`
  margin-top: 40px;
  background-color: ${palette.black[0]};
  color: ${palette.white[0]};
  padding: 2px 7px;
`;

export default ProductView;
