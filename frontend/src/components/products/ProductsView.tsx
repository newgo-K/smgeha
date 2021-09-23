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
import { resProductPacket } from 'lib/api/product';

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

const ProductCard = ({ ...props }: resProductPacket) => {
  const { title, num, make, liter, door, design, price } = { ...props };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="/img/sampleImg.png" />

      <CardContent className={classes.content}>
        <Typography variant="h4">{title}</Typography>
        <Divider />
        <ContentSub>제품 넘버: {num}</ContentSub>
        <ContentSub>제조사: {make}</ContentSub>
        <ContentSub>크기: {liter}</ContentSub>
        <ContentPrice>{price}</ContentPrice>
      </CardContent>
    </Card>
  );
};

function ProductsView({ data }: any) {
  return (
    <Wrap>
      {data &&
        data.map((t: resProductPacket) => (
          <Grid item lg={3} xs={12}>
            <ProductCard title={t.title} sub={t.design} price={t.liter} />
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

export default ProductsView;
