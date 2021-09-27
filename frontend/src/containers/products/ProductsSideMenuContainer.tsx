import ProductsSideMenu from 'components/products/ProductsSideMenu';
import ProductDetails from 'components/view_details/ProductDetails';
import React from 'react';
import produce from 'immer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'lib/modules';

// const menuGuide = [
//   // 냉장고
//   {
//     manufacture: ['LG', '삼성', '기타'],
//     type: ['일반형', '양문형', '4도어', '김치'],
//     size: ['299L 이하', '300~499L', '500~700L', '700L 이상'],
//   },
// ];

const menuTitle = ['제조사', '유형', '크기'];

const menuGuide = [
  [
    // 냉장고
    ['LG', '삼성', '기타'],
    ['일반형', '양문형', '4도어', '김치'],
    ['299L 이하', '300~499L', '500~700L', '700L 이상'],
  ],
  [
    // 에어컨
    ['LG', '삼성', '위니아', '캐리어', '기타'],
    ['벽걸이', '스탠드', '상가용'],
    ['8평 이하', '9~12평', '12~18평', '19평 이상'],
  ],
];

function ProductsSideMenuContainer() {
  const dispatch = useDispatch();
  const { data } = useSelector(({ products }: RootState) => ({
    data: products.productsMainMenuSelect,
  }));

  const menu = menuGuide[data];

  const menuChecked = [
    new Array(menu[0].length).fill(false),
    new Array(menu[1].length).fill(false),
    new Array(menu[2].length).fill(false),
  ];

  const [checked, setChecked] = React.useState(menuChecked);

  const handleChange = (index: number, arr: any) => {
    var updateChecked = checked;

    updateChecked[arr] = updateChecked[arr].map((check: any, pos: any) =>
      pos === index ? !check : check,
    );
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
