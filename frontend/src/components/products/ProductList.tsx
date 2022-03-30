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
      margin: '0.625rem',
      padding: '1.25rem 1.875rem',
      boxShadow: 'none',
      cursor: 'pointer',
      border: `2px solid ${palette.grey[2]}`,
      backgroundColor: `${palette.grey[0]}`,

      [theme.breakpoints.down('sm')]: {
        maxWidth: 170,
        margin: '0.3125rem',
        padding: '0.4375rem',
        border: `1px solid ${palette.grey[2]}`,
      },
    },
    content: {
      padding: '0.9375rem 0',
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
  onClick: (e: number) => void;
};

const ProductCard = ({
  id,
  name,
  serial,
  image,
  size,
  manufacture,
  price,
  subTypes,
  onClick,
}: ProductProps) => {
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
        {type && <ContentSub>유형 : {type}</ContentSub>}
        {price && (
          <ContentPrice>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </ContentPrice>
        )}
      </CardContent>
    </Card>
  );
};

type ProductsProps = {
  products: Array<resProductPacket> | null;
  onClick: (e: number) => void;
};

export default function ProductList({ products, onClick }: ProductsProps) {
  return (
    <Wrap>
      {products &&
        products.map((product: resProductPacket) => (
          <Grid key={product.id} item lg={3} sm={4} xs={6}>
            <ProductCard onClick={onClick} {...product} />
          </Grid>
        ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
  padding: 0.625rem;
  border-radius: 0.25rem;

  ${mediaQuery('xs')} {
    padding: 0.3125rem;
  }
`;

const Divider = styled.div`
  margin: 0.5rem 0px;
  border-bottom: 1px solid ${palette.grey[4]};
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
      padding: 0.3125rem 0;
      color: ${palette.main[4]} !important;
    `}
  >
    <Typography variant="subtitle1" {...props} />
  </div>
);
