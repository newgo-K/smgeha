import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';
import { formWidth, mediaQuery } from 'lib/styles/common';
import palette from 'lib/styles/palette';
import React from 'react';

function Footer() {
  return (
    <Wrap>
      <Grid container>
        <Grid item={true} sm={3} xs={6}>
          상호 : 새만금 중고가전
        </Grid>
        <Grid item={true} sm={8} xs={12}>
          오시는 길 : 전라북도 군산시 문화동 908-21
        </Grid>
        <Grid item={true} sm={3} xs={12}>
          전화번호 : 063-453-4137
        </Grid>
        <Grid item={true} sm={4} xs={12}>
          영업시간 : 09:00 ~ 19:00
        </Grid>
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  min-width: 1380px;
  max-width: 1380px;
  margin: 0 auto;
  padding: 0.9375rem 0;
  background: ${palette.white};
  border-top: 0.9375rem solid ${palette.grey[0]};
  color: ${palette.grey[4]};

  ${mediaQuery('md')} {
    font-size: 1.0625rem;
  }

  ${mediaQuery('xs')} {
    padding: 0.625rem;
    min-width: ${formWidth()};
    max-width: ${formWidth()};
    border-top: 0.625rem solid ${palette.grey[0]};
    font-size: 0.875rem;
  }
`;

export default Footer;
