import { css } from '@emotion/react';
import palette from 'lib/styles/palette';
import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';

import Carousel from './Carousel';
import { formWidth, mediaQuery } from 'lib/styles/common';

function ProductDetails() {
  return (
    <Wrap>
      <Title>
        <Typography variant="h1">LG 821L 4도어 냉장고</Typography>
      </Title>

      <div
        css={css`
          display: flex;
        `}
      >
        <Grid item xs={7}>
          <Carousel />
        </Grid>
        <Grid item xs={5}>
          <ContentTitle>제조넘버</ContentTitle>
          <ContentSub>A-0001</ContentSub>
          <ContentTitle>제조사</ContentTitle>
          <ContentSub>LG</ContentSub>
          <ContentTitle>용량</ContentTitle>
          <ContentSub>821L</ContentSub>
          <ContentTitle>도어수</ContentTitle>
          <ContentSub>4도어</ContentSub>
          <ContentTitle>디자인</ContentTitle>
          <ContentSub>메탈 화이트</ContentSub>
          <ContentPrice>520,000원</ContentPrice>
        </Grid>
      </div>
      <GuideDetail>
        <Typography variant="subtitle1">제품 소개</Typography>
      </GuideDetail>

      <p>
        {/* <iframe
              css={css`
                max-width: 400px;
                height: 500px;
                min-width: 360px;
              `}
              src="https://m.blog.naver.com/PostView.naver?blogId=apt4137&logNo=222506478506&navType=by"
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
      padding: 1px 0;
      line-height: 1;
    `}
  >
    <Typography variant="subtitle2" {...props} />
  </div>
);

const ContentSub = (props: any) => (
  <div
    css={css`
      color: ${palette.grey[4]} !important;
      padding: 1px 0;
    `}
  >
    <Typography variant="body1" {...props} />
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

export default ProductDetails;
