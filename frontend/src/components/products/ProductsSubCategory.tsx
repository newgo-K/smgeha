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
import {
  categoryContent,
  productSubCategoryPorps,
  subCategoryState,
} from 'containers/products/ProductsSubCategoryContainer';
import { Desktop, mediaQuery, Mobile } from 'lib/styles/common';
import Button from 'components/common/Button';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '340px',
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
}: productSubCategoryPorps) {
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
                  <li>
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
  border-top: 10px solid ${palette.grey[0]};

  p {
    margin-left: 7px;
    color: ${palette.black[0]};
  }
`;

const DrawerHeaderStyles = styled.div`
  border-bottom: 1px solid ${palette.grey[2]};
  text-align: right;
`;

const CategoryTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-left: 4px;
  padding-bottom: 9px;

  ${mediaQuery('xs')} {
    padding-top: 9px;
  }
`;

const CategoryContent = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export default ProductSubCategory;
