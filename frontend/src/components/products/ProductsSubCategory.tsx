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
import { Desktop, mediaQuery, Mobile } from 'lib/styles/common';
import Button from 'components/common/Button';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { resProductSubCategoryPacket } from 'lib/api/category';

export type categoryContent = resProductSubCategoryPacket & {
  checked: boolean;
};

export type subCategoryState = {
  title: categoryContent;
  contents: Array<categoryContent>;
};

export type ProductSubCategoryPorps = {
  categories: Array<subCategoryState>;
  drawerFlag: boolean;
  onChecked: (e: number) => void;
  toggleDrawer: (e: boolean) => void;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 340,
  },
  fullList: {
    width: 'auto',
  },
}));

function ProductSubCategory({
  categories,
  drawerFlag,
  onChecked,
  toggleDrawer,
}: ProductSubCategoryPorps) {
  const classes = useStyles();

  const list = (categories: any, onChecked: any) => {
    return (
      <>
        <Mobile>
          <DrawerHeaderStyles>
            <Button variant="text" onClick={() => toggleDrawer(false)}>
              <Icon icon="close" color={palette.black[0]} size="1.1rem" />
            </Button>
          </DrawerHeaderStyles>
        </Mobile>
        <CategoryTitle>상세검색</CategoryTitle>
        {categories &&
          categories.map((category: subCategoryState) => (
            <Accordion square key={category.title.code}>
              <AccordionSummary
                expandIcon={
                  <Icon icon="upArrow" color={palette.black[0]} size="0.8rem" />
                }
              >
                <CategoryContent>{category.title.name}</CategoryContent>
              </AccordionSummary>

              {category.contents &&
                category.contents.map((content: categoryContent) => (
                  <li key={content.code}>
                    <AccordionDetails>
                      <Checkbox
                        checked={content.checked}
                        icon="circle"
                        checkedIcon="checkCircleFill"
                        label={content.name}
                        size="small"
                        onChange={() => onChecked(content.code)}
                      />
                    </AccordionDetails>
                  </li>
                ))}
            </Accordion>
          ))}
      </>
    );
  };

  return (
    <>
      <Mobile>
        <HeaderStyles>
          <li>
            <Button variant="text" onClick={() => toggleDrawer(true)}>
              <Icon icon="filter" color={palette.black[0]} size="1.1rem" />
              <p>상세검색</p>
            </Button>
          </li>
        </HeaderStyles>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor="right"
          open={drawerFlag}
          onClose={() => toggleDrawer(false)}
        >
          {list(categories, onChecked)}
        </Drawer>
      </Mobile>

      <Desktop>{list(categories, onChecked)}</Desktop>
    </>
  );
}

const HeaderStyles = styled.div`
  border-top: 0.625rem solid ${palette.grey[0]};

  p {
    margin-left: 0.4375rem;
    color: ${palette.black[0]};
  }
`;

const DrawerHeaderStyles = styled.div`
  border-bottom: 1px solid ${palette.grey[2]};
  text-align: right;
`;

const CategoryTitle = styled.div`
  padding-left: 0.25rem;
  padding-bottom: 0.5625rem;
  font-weight: 500;
  font-size: 0.875rem;

  ${mediaQuery('xs')} {
    padding-top: 0.5625rem;
  }
`;

const CategoryContent = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

export default ProductSubCategory;
