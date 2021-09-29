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

function ProductImgCarousel({ imgList }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <Container>
      <StyledSlider {...settings}>
        {imgList &&
          imgList.map((img: any) => (
            <div>
              <CardImg src={`/images/${img}`} />
            </div>
          ))}
      </StyledSlider>
    </Container>
  );
}

const StyledSlider = (props: Settings) => (
  <Slider
    css={css`
      .slick-slide div {
        /* cursor: pointer; */
      }

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
    `}
    {...props}
  />
);

const Container = styled.div`
  width: 210px;

  ${mediaQuery('xs')} {
    width: 170px;
  }
`;

const CardImg = styled.img`
  width: 150px !important;
  height: 250px !important;
  margin: 0 auto !important;
  object-fit: contain !important;
`;

export default ProductImgCarousel;
