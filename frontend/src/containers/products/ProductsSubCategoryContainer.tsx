import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import { productSubCategorySelectAsync } from 'lib/modules/category/actions';
import { resProductSubCategoryPacket } from 'lib/api/category';
import ProductSubCategory from 'components/products/ProductsSubCategory';

const enum CATEGORY {
  INTRODUCE = 1,
}

export type categoryContent = resProductSubCategoryPacket & {
  checked: boolean;
};

export type subCategoryProps = {
  title: categoryContent;
  contents: Array<categoryContent>;
};

function ProductSubCategoryContainer() {
  const dispatch = useDispatch();
  const { subCategory } = useSelector(({ products, category }: RootState) => ({
    subCategory: category.productSubCategory.success,
  }));

  const [categories, setCategories] = useState<Array<subCategoryProps>>([]);

  // 최초 서브 카테고리는 업체 소개 다음 카테고리로 초기화
  useEffect(() => {
    const code = CATEGORY.INTRODUCE + 1;
    dispatch(productSubCategorySelectAsync.request({ code }));
  }, [dispatch]);

  useEffect(() => {
    if (subCategory) {
      let tempCategories = Array<subCategoryProps>();
      // 부모값을 이용해서 카테고리 분류
      let parent = subCategory[subCategory.length - 1].parent;
      let title: categoryContent = {
        code: 0,
        name: '',
        parent: 0,
        depth: 0,
        checked: false,
      };
      let contents = Array<categoryContent>();

      subCategory.forEach(
        (category: resProductSubCategoryPacket, index: number) => {
          const addCategory: categoryContent = {
            ...category,
            checked: false,
          };

          // depth가 1이라면 대분류
          if (category.depth === 1) {
            title = addCategory;
          } else {
            contents.push(addCategory);
          }

          // 현재 부모값이 대분류값일 경우 카테고리를 분류
          if (parent === category.parent) {
            const tempCategory: subCategoryProps = {
              title,
              contents: [...contents].reverse(),
            };

            tempCategories.push(tempCategory);
            contents.length = 0;
          }
        },
      );

      setCategories([...tempCategories].reverse());
    }
  }, [subCategory]);

  const onChecked = (code: number) => {
    let tempCategory = [...categories];
    let discovery = false;

    for (let outer = 0; outer < tempCategory.length; outer++) {
      const contents = tempCategory[outer].contents;
      for (let inner = 0; inner < contents.length; inner++) {
        const content = contents[inner];
        if (content.code === code) {
          content.checked = !content.checked;
          discovery = true;
          break;
        }
      }
      if (discovery) {
        break;
      }
    }

    setCategories([...tempCategory]);
  };

  return (
    <>
      <ProductSubCategory categories={categories} onChecked={onChecked} />
    </>
  );
}

export default ProductSubCategoryContainer;
