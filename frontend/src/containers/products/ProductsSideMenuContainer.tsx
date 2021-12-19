import ProductsSideMenu from 'components/products/ProductsSideMenu';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';
import { productsSideMenuSelectAsync } from 'lib/modules/products/actions';
import { productSubCategorySelectAsync } from 'lib/modules/category/actions';

const menuTitle = ['제조사', '유형', '크기'];

const menuGuide = [
  [
    // 냉장고
    ['LG', '삼성', '기타'],
    ['일반형', '양문형', '4도어', '김치 냉장고'],
    ['299L 이하', '300~499L', '500~699L', '700L 이상'],
  ],
  [
    // 에어컨
    ['LG', '삼성', '위니아', '캐리어', '기타'],
    ['벽걸이', '스탠드', '2in1'],
    ['8평 이하', '9~12평', '13~18평', '19평 이상'],
  ],
  [
    // 세탁기
    ['LG', '삼성', '기타'],
    ['통돌이', '드럼'],
    ['10kg 이하', '11~15kg', '16kg 이상'],
  ],
  [
    // TV
    ['LG', '삼성', '기타'],
    ['LED', 'LCD', '기타'],
    ['39인치 이하', '40~50인치', '51인치 이상'],
  ],
];

const enum CATEGORY {
  INTRODUCE = 1,
}

function ProductsSideMenuContainer() {
  const dispatch = useDispatch();
  const { id } = useSelector(({ products }: RootState) => ({
    id: products.productsMainMenuSelect,
  }));

  const [menu, setMenu] = useState(menuGuide[id]);

  // 최초 서브 카테고리는 업체 소개 다음 카테고리로 초기화
  useEffect(() => {
    const code = CATEGORY.INTRODUCE + 1;
    dispatch(productSubCategorySelectAsync.request({ code }));
  }, [dispatch]);

  const initMenuChecked = useCallback(
    (id: number) => {
      let menuChecked = [
        new Array(menu[0].length).fill(false),
        new Array(menu[1].length).fill(false),
        new Array(menu[2].length).fill(false),
      ];

      return menuChecked;
    },
    [menu],
  );

  const [checked, setChecked] = React.useState(initMenuChecked(id));

  useEffect(() => {
    setMenu(menuGuide[id]);
    setChecked([...initMenuChecked(id)]);
  }, [id, initMenuChecked]);

  const handleChange = (index: number, arr: any) => {
    let updateChecked: Array<Array<boolean>> = checked;

    updateChecked[arr] = updateChecked[arr].map((check: any, pos: any) =>
      pos === index ? !check : check,
    );

    let sideMenus: Array<Array<number>> = [[], [], []];

    updateChecked.forEach((arr: Array<boolean>, outIndex: number) => {
      arr.forEach((check: boolean, inIndex: number) => {
        if (check === true) {
          sideMenus[outIndex].push(inIndex);
        }
      });
    });

    dispatch(productsSideMenuSelectAsync.request({ id, sideMenus }));

    setChecked([...updateChecked]);
  };

  return (
    <div>
      <ProductsSideMenu
        menu={menu}
        menuTitle={menuTitle}
        checked={checked}
        handleChange={handleChange}
      />
    </div>
  );
}

export default ProductsSideMenuContainer;
