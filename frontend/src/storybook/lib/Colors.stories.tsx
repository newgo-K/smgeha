/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import palette from 'lib/styles/palette';

export default {
  title: 'Colors',
};

type colorProps = {
  backgroundColor: string;
};

const Title = styled('div')`
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 10px;

  span {
    font-weight: 700;
    font-size: 12px;
    padding-top: 6px;
  }
`;

const LabelWrap = styled('div')`
  display: flex;
  border: 1px solid ${palette.grey[3]};

  div {
    flex-grow: 1;
  }
`;

const ColorLabel = styled('div')`
  position: relative;
  width: 100px;
  height: 50px;
  background-color: ${(props: colorProps) => props.backgroundColor};
  filter: drop-shadow(1px 3px 2px ${palette.grey[3]});

  span {
    position: absolute;
    top: 52px;
    right: 0;
    font-size: 12px;
    color: ${palette.grey[8]};
    font-weight: 700;
    padding: 5px;
  }
`;

export const Colors = () => {
  // const title: titleType = Object.keys(palette);
  const title: Array<string> = Object.keys(palette);

  return (
    <div>
      {title.map((t: string) => (
        <div
          css={css`
            padding: 20px;
            padding-bottom: 40px;
            border: 1px solid ${palette.grey[2]};
            margin-bottom: 10px;
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <Title>
              {t.toUpperCase()} <span>palette.{t}</span>
            </Title>
          </div>
          <LabelWrap>
            {palette[t as 'grey'].map((c) => (
              <ColorLabel backgroundColor={c}>
                <span>{c}</span>
              </ColorLabel>
            ))}
          </LabelWrap>
        </div>
      ))}
    </div>
  );
};
