import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'components/common/Button';
import Icon from 'lib/icon/Icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Desktop, mediaQuery } from 'lib/styles/common';
import palette from 'lib/styles/palette';

export type CarouselProps = {
  imgs: Array<string>;
};

function ProductImgCarousel({ imgs }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: <CustomArrow arrow="leftArrow" />,
    nextArrow: <CustomArrow arrow="rightArrow" />,
  };

  function CustomArrow({ arrow, onClick }: any) {
    return (
      <Desktop>
        <div
          css={css`
            display: block;
            position: absolute;
            top: 39%;
            ${arrow === 'leftArrow' ? `left: -7px;` : `right: -7px;`}
            z-index: 2;
          `}
        >
          <Button iconOnly variant="text" onClick={onClick}>
            <Icon icon={arrow} color={palette.grey[5]} />
          </Button>
        </div>
      </Desktop>
    );
  }

  return (
    <Wrap>
      <SliderStyles {...settings}>
        {imgs &&
          imgs.map((img: string) => (
            <li key={img}>
              <CardImg src={`/images/${img}`} />
            </li>
          ))}
      </SliderStyles>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 210px;

  ${mediaQuery('xs')} {
    width: 170px;
  }
`;

const SliderStyles = (props: Settings) => (
  <Slider
    css={css`
      .slick-dots {
        margin-top: 250px !important;

        li {
          width: 16px;
          margin: 0;

          button:before {
            color: ${palette.grey[8]};
          }
        }
      }

      .slick-active {
        button {
          &::before {
            color: ${palette.main[4]} !important;
          }
        }
      }
    `}
    {...props}
  />
);

const CardImg = styled.img`
  width: 150px;
  height: 250px;
  margin: 0 auto;
  object-fit: contain;
`;

export default ProductImgCarousel;
