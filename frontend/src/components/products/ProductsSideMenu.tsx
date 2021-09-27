import React from 'react';
import Icon from 'lib/icon/Icon';
import palette from 'lib/styles/palette';
import Checkbox from 'components/common/Checkbox';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from 'components/common/Accordion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function ProductSideMenuSub({ menu, menuIndex, checked, handleChange }: any) {
  return (
    <>
      {menu &&
        menu.map((label: string, index: number) => (
          <li key={index}>
            <AccordionDetails>
              <Checkbox
                checked={checked[index]}
                icon="circle"
                checkedIcon="checkCircleFill"
                label={label}
                size="small"
                onChange={() => handleChange(index, menuIndex)}
              />
            </AccordionDetails>
          </li>
        ))}
    </>
  );
}

function ProductsSideMenu({ menu, menuTitle, checked, handleChange }: any) {
  return (
    <div>
      {menuTitle &&
        menuTitle.map((title: string, index: number) => (
          <Accordion square>
            <AccordionSummary
              key={index}
              css={css`
                border-top: none !important;
              `}
              expandIcon={
                <Icon icon="upArrow" color={palette.black[0]} size="0.8rem" />
              }
            >
              <MenuTitle>{title}</MenuTitle>
            </AccordionSummary>

            <ProductSideMenuSub
              menu={menu[index]}
              menuIndex={index}
              checked={checked[index]}
              handleChange={handleChange}
            />
          </Accordion>
        ))}
      {/* <Accordion square>
        <AccordionSummary
          expandIcon={
            <Icon icon="upArrow" color={palette.black[0]} size="0.8rem" />
          }
        >
          <MenuTitle>크기</MenuTitle>
        </AccordionSummary>

        {type &&
          type.map((data: string, index: number) => (
            <li key={index}>
              <AccordionDetails>
                <Checkbox
                  checked={checked.type[index]}
                  icon="circle"
                  checkedIcon="checkCircleFill"
                  label={data}
                  size="small"
                  onChange={() => handleChange(index, checked.type)}
                />
              </AccordionDetails>
            </li>
          ))}
      </Accordion> */}
    </div>
  );
}

const MenuTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export default ProductsSideMenu;
