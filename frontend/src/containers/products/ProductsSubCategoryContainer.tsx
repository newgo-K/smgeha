import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import { productSubCategorySelectAsync } from 'lib/modules/category/actions';
import { resProductSubCategoryPacket } from 'lib/api/category';
import ProductSubCategory from 'components/products/ProductsSubCategory';
import { reqProductSubCategorySearchPacket } from 'lib/api/products';
import { productsSubCategorySearchAsync } from 'lib/modules/products/actions';

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
  const { mainCode, subCategory } = useSelector(
    ({ products, category }: RootState) => ({
      mainCode: products.productsMainMenuSelect,
      subCategory: category.productSubCategory.success,
    }),
  );

  const [categories, setCategories] = useState<Array<subCategoryProps>>([]);
  const [checkFlag, setCheckFlag] = useState<boolean>(false);

  // 최초 서브 카테고리는 업체 소개 다음 카테고리로 초기화
  useEffect(() => {
    const code = CATEGORY.INTRODUCE + 1;
    dispatch(productSubCategorySelectAsync.request({ code }));
  }, [dispatch]);

  useEffect(() => {
    if (subCategory) {
      let tempCategories = Array<subCategoryProps>();
      // 부모값을 이용해 대분류를 찾음
      let parent = subCategory[0].parent;
      let title: categoryContent = {
        code: 0,
        name: '',
        parent: 0,
        depth: 0,
        checked: false,
      };
      let contents = Array<categoryContent>();

      // subCategory value 값이 0부터 시작하면
      // 최초 카테고리 값을 분류해야하는 코드가 필요
      // 카테고리 개수가 많지 않으니 reverse 사용
      // 만약 성능에 지장을 줄 정도라면 reverse 지우고 코드를 추가해야 함
      subCategory
        .reverse()
        .forEach((category: resProductSubCategoryPacket, index: number) => {
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
              contents: [...contents.reverse()],
            };

            tempCategories.push(tempCategory);
            contents.length = 0;
          }
        });

      if (tempCategories.length > 2) {
        setCategories([...tempCategories.reverse()]);
      }
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
    setCheckFlag(true);
  };

  useEffect(() => {
    if (checkFlag) {
      let subCodes = Array<number>();

      categories.forEach((category: subCategoryProps) => {
        category.contents.forEach((content: categoryContent) => {
          if (content.checked) {
            subCodes.push(content.code);
          }
        });
      });

      setCheckFlag(false);
      dispatch(
        productsSubCategorySearchAsync.request({ mainCode, subCodes } as any),
      );
    }
  }, [mainCode, categories, checkFlag, dispatch]);

  return (
    <>
      <ProductSubCategory categories={categories} onChecked={onChecked} />
    </>
  );
}

export default ProductSubCategoryContainer;
