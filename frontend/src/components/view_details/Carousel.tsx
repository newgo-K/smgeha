import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'components/common/Button';
import Icon from 'lib/icon/Icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Desktop } from 'lib/styles/common';
import palette from 'lib/styles/palette';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <Container>
      <StyledSlider {...settings}>
        <div>
          <CardImg src="/img/sampleImg.png" />
        </div>
        <div>
          <CardImg src="/img/sampleImg.png" />
        </div>
        <div>
          <CardImg src="/img/sampletvimg.png" />
        </div>
      </StyledSlider>
    </Container>
  );
}

function CustomPrevArrow({ onClick }: any) {
  return (
    <Desktop>
      <div
        css={css`
          display: block;
          position: absolute;
          top: 39%;
          left: -7px;
          z-index: 2;
        `}
      >
        <Button iconOnly variant="text" onClick={onClick}>
          <Icon icon="leftArrow" color={palette.grey[5]} />
        </Button>
      </div>
    </Desktop>
  );
}

function CustomNextArrow({ onClick }: any) {
  return (
    <Desktop>
      <div
        css={css`
          display: block;
          position: absolute;
          top: 39%;
          right: -7px;
          z-index: 2;
        `}
      >
        <Button iconOnly variant="text" onClick={onClick}>
          <Icon icon="rightArrow" color={palette.grey[5]} />
        </Button>
      </div>
    </Desktop>
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
`;

const CardImg = styled.img`
  width: 150px !important;
  height: 250px !important;
  margin: 0 auto !important;
  object-fit: contain !important;
`;
