import React, { useEffect, useState } from 'react';
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
import { resProductPacket } from 'lib/api/products';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '20px 30px',
      margin: '10px',
      boxShadow: 'none',

      [theme.breakpoints.down('sm')]: {
        maxWidth: 170,
        margin: 5,
        padding: 7,
      },
    },
    content: {
      padding: '15px 0',
      '&:last-child': {
        paddingBottom: '0 !important',
      },
    },
    media: {
      width: 200,
      height: 200,
      margin: 'auto',
      backgroundSize: 'contain',

      [theme.breakpoints.down('sm')]: {
        width: 150,
        height: 150,
      },
    },
  }),
);

type ProductProps = resProductPacket & {
  onClick: any;
};

const ProductCard = ({ onClick, ...props }: ProductProps) => {
  const { id, name, serial, image, size, manufacture, price, subTypes } = props;
  const [type, setType] = useState<string>('');
  const classes = useStyles();

  useEffect(() => {
    setType(subTypes.split(',')[2]);
  }, [subTypes]);

  return (
    <Card className={classes.root} onClick={() => onClick(id)}>
      <CardMedia className={classes.media} image={`/images/${image}`} />

      <CardContent className={classes.content}>
        <Typography variant="h4">{name}</Typography>
        <Divider />

        <ContentSub>시리얼 : {serial}</ContentSub>
        <ContentSub>제조사 : {manufacture}</ContentSub>
        <ContentSub>크기 : {size}</ContentSub>
        <ContentSub>유형 : {type}</ContentSub>

        <ContentPrice>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </ContentPrice>
      </CardContent>
    </Card>
  );
};

type ProductsProps = {
  products: Array<resProductPacket> | null;
  onClick: any;
};

export default function ProductList({ products, onClick }: ProductsProps) {
  return (
    <Wrap>
      {products &&
        products.map((product: resProductPacket) => (
          <Grid item lg={3} xs={6}>
            <ProductCard onClick={onClick} {...product} />
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
  padding: 10px;

  ${mediaQuery('xs')} {
    padding: 5px;
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
