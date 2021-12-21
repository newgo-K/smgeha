import React, { useState } from 'react';
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
  subCategoryProps,
} from 'containers/products/ProductsSubCategoryContainer';
import { Desktop, mediaQuery, Mobile } from 'lib/styles/common';
import Button from 'components/common/Button';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { css } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80%',
  },
  list: {},
  fullList: {
    width: 'auto',
  },
}));

function ProductSubCategory({ categories, onChecked }: any) {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const list = (categories: any, onChecked: any) => {
    return (
      <>
        <Mobile>
          <div
            css={css`
              border-bottom: 1px solid ${palette.grey[2]};
              text-align: right;
            `}
          >
            <Button variant="text" onClick={() => toggleDrawer(false)}>
              <Icon icon="close" color={palette.black[0]} size="1.1rem" />
            </Button>
          </div>
        </Mobile>
        <CategoryTitle>상세검색</CategoryTitle>
        {categories &&
          categories.map((category: subCategoryProps) => (
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
        <div
          css={css`
            border-top: 10px solid ${palette.grey[0]};
            text-align: right;
          `}
        >
          <Button variant="text" onClick={() => toggleDrawer(true)}>
            <Icon icon="menu" color={palette.black[0]} size="1.1rem" />
          </Button>
        </div>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor="right"
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list(categories, onChecked)}
        </Drawer>
      </Mobile>

      <Desktop>{list(categories, onChecked)}</Desktop>
    </>
  );
}

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
