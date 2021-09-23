import React from 'react';
import Icon from 'lib/icon/Icon';
import palette from 'lib/styles/palette';
import { css } from '@emotion/react';
import Checkbox from 'components/common/Checkbox';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from 'components/common/Accordion';
import styled from '@emotion/styled';

export default function MainSideMenu() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Wrap>
      <Accordion square>
        <AccordionSummary
          css={css`
            border-top: none !important;
          `}
          expandIcon={
            <Icon icon="upArrow" color={palette.black[0]} size="0.8rem" />
          }
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <MenuTitle>제조자</MenuTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Checkbox
            checked={checked}
            icon="circle"
            checkedIcon="checkCircleFill"
            label="삼성"
            size="small"
            onChange={handleChange}
          />
        </AccordionDetails>
        <AccordionDetails>
          <Checkbox
            icon="circle"
            checkedIcon="checkCircleFill"
            label="LG"
            size="small"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion square>
        <AccordionSummary
          expandIcon={
            <Icon icon="upArrow" color={palette.black[0]} size="0.8rem" />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MenuTitle>용량</MenuTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Checkbox
            icon="circle"
            checkedIcon="checkCircleFill"
            label="양문형"
            size="small"
          />
        </AccordionDetails>
        <AccordionDetails>
          <Checkbox
            icon="circle"
            checkedIcon="checkCircleFill"
            label="4도어"
            size="small"
          />
        </AccordionDetails>
      </Accordion>
    </Wrap>
  );
}

const Wrap = styled.div`
  /* width: 100%; */
`;

const MenuTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
