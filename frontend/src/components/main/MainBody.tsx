import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import palette from 'lib/styles/palette';
import { Grid } from '@material-ui/core';
import { mediaQuery } from 'lib/styles/common';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 170,
      padding: '20px 40px',

      boxShadow: 'none',

      [theme.breakpoints.up('sm')]: {
        margin: 10,
      },
    },
    content: {
      padding: '15px 0',
      '&:last-child': {
        paddingBottom: '0 !important',
      },
    },
    media: {
      width: 170,
      height: 170,
      margin: 'auto',
      backgroundSize: 'contain',
    },
  }),
);

const sampleData = [
  {
    title: 'LG 4도어 냉장고',
    sub: [
      '제조넘버 : A-0001',
      '제조사 : LG',
      '용량 : 821L',
      '도어수 : 4도어',
      '디자인 : 메탈 화이트',
    ],
    price: '520,000원',
  },
  {
    title: 'LG 4도어 냉장고',
    sub: [
      '제조넘버 : A-0001',
      '제조사 : LG',
      '용량 : 821L',
      '도어수 : 4도어',
      '디자인 : 메탈 화이트',
    ],
    price: '520,000원',
  },
  {
    title: 'LG 4도어 냉장고',
    sub: [
      '제조넘버 : A-0001',
      '제조사 : LG',
      '용량 : 821L',
      '도어수 : 4도어',
      '디자인 : 메탈 화이트',
    ],
    price: '520,000원',
  },
  {
    title: 'LG 4도어 냉장고',
    sub: [
      '제조넘버 : A-0001',
      '제조사 : LG',
      '용량 : 821L',
      '도어수 : 4도어',
      '디자인 : 메탈 화이트',
    ],
    price: '520,000원',
  },
  {
    title: 'LG 4도어 냉장고',
    sub: [
      '제조넘버 : A-0001',
      '제조사 : LG',
      '용량 : 821L',
      '도어수 : 4도어',
      '디자인 : 메탈 화이트',
    ],
    price: '520,000원',
  },
  {
    title: 'LG 4도어 냉장고',
    sub: [
      '제조넘버 : A-0001',
      '제조사 : LG',
      '용량 : 821L',
      '도어수 : 4도어',
      '디자인 : 메탈 화이트',
    ],
    price: '520,000원',
  },
];

const ProductCard = ({ title, sub, price }: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="/img/sampleImg.png" />

      <CardContent className={classes.content}>
        <Typography variant="h4">{title}</Typography>
        <Divider />
        {sub.map((t: any) => (
          <ContentSub>{t}</ContentSub>
        ))}
        <ContentPrice>{price}</ContentPrice>
      </CardContent>
    </Card>
  );
};

export default function MainBody() {
  return (
    <Wrap>
      {sampleData.map((t: any) => (
        <Grid item lg={3} xs={12}>
          <ProductCard title={t.title} sub={t.sub} price={t.price} />
        </Grid>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: ${palette.grey[0]};
  display: flex;
  flex-wrap: wrap;
  border-radius: 4px;
  padding: 5px;
  ${mediaQuery('xs')} {
    display: inline-block;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid ${palette.grey[4]};
  margin: 8px 0px;
`;

const ContentSub = (props: any) => (
  <div
    css={css`
      color: ${palette.grey[4]} !important;
    `}
  >
    <Typography variant="body1" {...props} />
  </div>
);

const ContentPrice = (props: any) => (
  <div
    css={css`
      padding: 5px 0;
      color: ${palette.main[4]} !important;
    `}
  >
    <Typography variant="subtitle1" {...props} />
  </div>
);
