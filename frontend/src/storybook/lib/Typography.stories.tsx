import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';
import { fixedFont, responsiveFont } from 'lib/styles/fonts';
import palette from 'lib/styles/palette';

export default {
  title: 'Typographys',
  options: {
    sourceLoaderOptions: null,
  },
};

const Wrap = styled.ul`
  .type-wrap {
    :first-of-type {
      margin-bottom: 50px;
    }
  }
`;

const titleWrap = css`
  div {
    ${responsiveFont.d1};
    color: ${palette.grey[8]};
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${palette.grey[5]};

    li {
      ${responsiveFont.b1};
      color: ${palette.grey[5]};
    }
  }
`;

const FontWrap = styled('div')`
  display: flex;
  align-items: center;
  height: 80px;

  ul {
    display: flex;
    margin: 0;
  }
`;

type TypographyType = {
  category: string;
  weight: string;
  px: number;
  rem: number;
};

const commonGuideTexts: Array<TypographyType> = [
  {
    category: 'd1 Display',
    weight: 'Bold',
    px: 30,
    rem: 1.875,
  },
  {
    category: 'd2 Display',
    weight: 'Bold',
    px: 24,
    rem: 1.5,
  },
  {
    category: 'h1 Heading',
    weight: 'Medium',
    px: 20,
    rem: 1.25,
  },
  {
    category: 'h2 Heading',
    weight: 'Medium',
    px: 18,
    rem: 1.125,
  },
  {
    category: 'h3 Heading',
    weight: 'Medium',
    px: 16,
    rem: 1.0,
  },
  {
    category: 's1 SubTitle',
    weight: 'Regular',
    px: 14,
    rem: 0.875,
  },
  {
    category: 's2 SubTitle',
    weight: 'Regular',
    px: 12,
    rem: 0.75,
  },
  {
    category: 'b1 Body',
    weight: 'Regular',
    px: 14,
    rem: 0.875,
  },
  {
    category: 'b2 Body',
    weight: 'Regular',
    px: 11,
    rem: 0.688,
  },
];

const mobileGuideTexts: Array<TypographyType> = [
  {
    category: 'd1 Display',
    weight: 'Bold',
    px: 24,
    rem: 1.5,
  },
  {
    category: 'd2 Display',
    weight: 'Bold',
    px: 24,
    rem: 1.5,
  },
  {
    category: 'd3 Display',
    weight: 'Bold',
    px: 24,
    rem: 1.5,
  },
  {
    category: 'h1 Heading',
    weight: 'Bold',
    px: 18,
    rem: 1.125,
  },
  {
    category: 'h2 Heading',
    weight: 'Bold',
    px: 18,
    rem: 1.125,
  },
  {
    category: 'h3 Heading',
    weight: 'Bold',
    px: 16,
    rem: 1.0,
  },
  {
    category: 'b1 Body',
    weight: 'Medium',
    px: 14,
    rem: 0.875,
  },
  {
    category: 'b2 Body',
    weight: 'Medium',
    px: 14,
    rem: 0.875,
  },
  {
    category: 'b3 Body',
    weight: 'Medium',
    px: 13,
    rem: 0.8125,
  },
  {
    category: 's1 Subtitle',
    weight: 'Medium',
    px: 13,
    rem: 0.8125,
  },
  {
    category: 's2 Subtitle',
    weight: 'Medium',
    px: 12,
    rem: 0.75,
  },
];

type TypographySystemType = {
  type: any;
  gudieTexts: Array<TypographyType>;
};

const TypographySystem = ({ type, gudieTexts }: TypographySystemType) => {
  const typography: Array<string> = Object.keys(type);

  return (
    <div>
      <div>
        <div css={titleWrap}>
          {type === fixedFont ? (
            <div>
              <div>fixedFont & responsiveFont</div>
              <div>PC/Tablet</div>
            </div>
          ) : (
            <div>
              <div>responsiveFont</div>
              <div>Mobile</div>
            </div>
          )}
          <ul>
            <Grid item xs={6}>
              <li>Category</li>
            </Grid>
            <Grid item lg={2} xs={3}>
              <li>Weight</li>
            </Grid>
            <Grid item lg={2} xs={1}>
              <li>PX</li>
            </Grid>
            <Grid item lg={2} xs={2}>
              <li>REM</li>
            </Grid>
          </ul>
        </div>
        {typography.map((t: string, index: number) => (
          <FontWrap key={t}>
            <Grid item xs={6}>
              <div css={type[t as 'd1']}>{gudieTexts[index].category}</div>
            </Grid>
            <Grid item xs={6}>
              <ul css={fixedFont.b2}>
                <Grid item lg={4} xs={6}>
                  <li>{gudieTexts[index].weight}</li>
                </Grid>
                <Grid item lg={4} xs={2}>
                  <li>{gudieTexts[index].px}</li>
                </Grid>
                <Grid item xs={4}>
                  <li>{gudieTexts[index].rem}</li>
                </Grid>
              </ul>
            </Grid>
          </FontWrap>
        ))}
      </div>
    </div>
  );
};

export const Typographys = () => {
  return (
    <Wrap>
      <li className="type-wrap">
        <TypographySystem type={fixedFont} gudieTexts={commonGuideTexts} />
      </li>
      <li className="type-wrap">
        <TypographySystem type={responsiveFont} gudieTexts={mobileGuideTexts} />
      </li>
    </Wrap>
  );
};
