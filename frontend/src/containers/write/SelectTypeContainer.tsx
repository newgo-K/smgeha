import { FormControl, InputLabel, withStyles } from '@material-ui/core';
import MuiSelect from '@material-ui/core/Select';
import TextField from 'components/common/TextField';
import React from 'react';

const PRODUCT_TYPE = {
  REFRIGERATOR: 0,
  AIRCONDITIONER: 1,
  WASHINGMACHINE: 2,
  TV: 3,
} as const;

const SELECT_TYPE = {
  PRODUCT: 0,
  MANUFACTURE: 1,
  TYPE: 2,
} as const;

type PRODUCT_TYPE = typeof PRODUCT_TYPE[keyof typeof PRODUCT_TYPE];
type SELECT_TYPE = typeof SELECT_TYPE[keyof typeof SELECT_TYPE];

const menuType = {
  [SELECT_TYPE.PRODUCT]: {
    [PRODUCT_TYPE.REFRIGERATOR]: '냉장고',
    [PRODUCT_TYPE.AIRCONDITIONER]: '에어컨',
    [PRODUCT_TYPE.WASHINGMACHINE]: '세탁기',
    [PRODUCT_TYPE.TV]: 'TV',
  },

  [SELECT_TYPE.MANUFACTURE]: {
    [PRODUCT_TYPE.REFRIGERATOR]: {
      0: 'LG',
      1: '삼성',
      2: '기타',
    },
    [PRODUCT_TYPE.AIRCONDITIONER]: {
      0: 'LG',
      1: '삼성',
      2: '위니아',
      3: '캐리어',
      4: '기타',
    },
    [PRODUCT_TYPE.WASHINGMACHINE]: {
      0: 'LG',
      1: '삼성',
      2: '기타',
    },
    [PRODUCT_TYPE.TV]: {
      0: 'LG',
      1: '삼성',
      2: '기타',
    },
  },

  [SELECT_TYPE.TYPE]: {
    [PRODUCT_TYPE.REFRIGERATOR]: {
      0: '일반형',
      1: '양문형',
      2: '4도어',
      3: '김치 냉장고',
    },
    [PRODUCT_TYPE.AIRCONDITIONER]: {
      0: '벽걸이',
      1: '스탠드',
      2: '2in1',
    },
    [PRODUCT_TYPE.WASHINGMACHINE]: {
      0: '통돌이',
      1: '드럼',
    },
    [PRODUCT_TYPE.TV]: {
      0: 'LED',
      1: 'LCD',
    },
  },
};

/*
// const products = {
//   [PRODUCT_TYPE.REFRIGERATOR]: '냉장고',
//   [PRODUCT_TYPE.AIRCONDITIONER]: '에어컨',
//   [PRODUCT_TYPE.WASHINGMACHINE]: '세탁기',
//   [PRODUCT_TYPE.TV]: 'TV',
// };

// const manufactures = {
//   [PRODUCT_TYPE.REFRIGERATOR]: {
//     0: 'LG',
//     1: '삼성',
//     2: '기타',
//   },
//   [PRODUCT_TYPE.AIRCONDITIONER]: {
//     0: 'LG',
//     1: '삼성',
//     2: '위니아',
//     3: '캐리어',
//     4: '기타',
//   },
//   [PRODUCT_TYPE.WASHINGMACHINE]: {
//     0: 'LG',
//     1: '삼성',
//     2: '기타',
//   },
//   [PRODUCT_TYPE.TV]: {
//     0: 'LG',
//     1: '삼성',
//     2: '기타',
//   },
// };

// const types = {
//   [PRODUCT_TYPE.REFRIGERATOR]: {
//     0: '일반형',
//     1: '양문형',
//     2: '4도어',
//     3: '김치 냉장고',
//   },
//   [PRODUCT_TYPE.AIRCONDITIONER]: {
//     0: '벽걸이',
//     1: '스탠드',
//     2: '2in1',
//   },
//   [PRODUCT_TYPE.WASHINGMACHINE]: {
//     0: '통돌이',
//     1: '드럼',
//   },
//   [PRODUCT_TYPE.TV]: {
//     0: 'LED',
//     1: 'LCD',
//   },
// };
*/

export const Select = withStyles({
  root: {
    width: 100,
    height: 30,
    fontSize: 17,
    lineHeight: 2,
  },
  selectMenu: {
    border: 'none',
  },
})(MuiSelect);

function SelectTypeContainer() {
  const [selectType, setSelectType] = React.useState<any>(menuType);

  const [dropManufacture, setDropManufacture] = React.useState<any>(
    menuType[SELECT_TYPE.MANUFACTURE][PRODUCT_TYPE.REFRIGERATOR],
  );
  const [dorpTypes, setDropTypes] = React.useState<any>(
    menuType[SELECT_TYPE.TYPE][PRODUCT_TYPE.REFRIGERATOR],
  );

  const onChange = (
    event: React.ChangeEvent<{ value: any }>,
    a: SELECT_TYPE,
  ) => {
    const value = event.target.value as any;

    let b = selectType;
    b[a] = value;

    if (a === SELECT_TYPE.PRODUCT) {
      setDropManufacture(
        menuType[SELECT_TYPE.MANUFACTURE][value as PRODUCT_TYPE],
      );
      setDropTypes(menuType[SELECT_TYPE.TYPE][value as PRODUCT_TYPE]);
    }

    setSelectType(b);
  };

  const Menus = ({ value, onChange, menus }: any) => {
    debugger;
    return (
      <>
        {menus && (
          <Select native value={value} onChange={onChange}>
            {Object.entries(menus).map(([key, name]: any) => (
              <option value={key}>{name}</option>
            ))}
          </Select>
        )}
      </>
    );
  };

  return (
    <div>
      <TextField placeholder="제품명" />
      <TextField placeholder="시리얼" />
      <TextField placeholder="크기" />
      <TextField placeholder="가격" />
      {selectType &&
        selectType.map((key: any, select: SELECT_TYPE) => (
          <Menus
            value={selectType[select]}
            onChange={(e: any) => onChange(e, select)}
            menus={menuType[key][select]}
          />
        ))}
    </div>
  );
}

export default SelectTypeContainer;
