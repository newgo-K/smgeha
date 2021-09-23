import Header from 'components/common/Header';
import React, { useCallback, useState } from 'react';
import MenuButtonContainer from './MenuButtonContainer';

interface MenuButton {
  title: string;
  subTitle: Array<string> | null;
}

const menuButtonsData: Array<MenuButton> = [
  {
    title: '업체소개',
    subTitle: null,
  },
  {
    title: '냉장고',
    subTitle: ['냉장고', '김치 냉장고'],
  },
  {
    title: '에어컨',
    subTitle: ['벽걸이 에어컨', '스탠드 에어컨'],
  },
  {
    title: '세탁기',
    subTitle: null,
  },
  {
    title: 'TV',
    subTitle: null,
  },
  {
    title: '기타제품',
    subTitle: null,
  },
  {
    title: '자주묻는 질문',
    subTitle: null,
  },
];

function HeaderContainer() {
  const menuButtons = () => {
    return (
      <div>
        {menuButtonsData.map((data: any) => (
          <li>
            <MenuButtonContainer props={data} />
          </li>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Header />
    </div>
  );
}

export default HeaderContainer;
