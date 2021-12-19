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
  subCategoryProps,
} from 'containers/products/ProductsSubCategoryContainer';

function ProductSubCategory({ categories, onChecked }: any) {
  console.log(categories);
  return (
    <div>
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
    </div>
  );
}

const CategoryTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-left: 4px;
  padding-bottom: 9px;
`;

const CategoryContent = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export default ProductSubCategory;
