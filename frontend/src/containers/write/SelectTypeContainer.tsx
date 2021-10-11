import { withStyles } from '@material-ui/core';
import MuiSelect from '@material-ui/core/Select';
import TextField from 'components/common/TextField';
import { RootState } from 'lib/modules';
import { productWriteSetData } from 'lib/modules/write/actions';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const products = {
  [PRODUCT_TYPE.REFRIGERATOR]: '냉장고',
  [PRODUCT_TYPE.AIRCONDITIONER]: '에어컨',
  [PRODUCT_TYPE.WASHINGMACHINE]: '세탁기',
  [PRODUCT_TYPE.TV]: 'TV',
};

const manufactures = {
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
};

const types = {
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
};

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
  const dispatch = useDispatch();
  const { form } = useSelector(({ write }: RootState) => ({
    form: write.productWriteSetData,
  }));
  const [selectTypes, setSelectTypes] = React.useState<any>([0, 0, 0]);

  const [dropManufacture, setDropManufacture] = React.useState<any>(
    manufactures[PRODUCT_TYPE.REFRIGERATOR],
  );
  const [dorpTypes, setDropTypes] = React.useState<any>(
    types[PRODUCT_TYPE.REFRIGERATOR],
  );

  const onChange = useCallback(
    (
      event: React.ChangeEvent<{ value: PRODUCT_TYPE }>,
      select: SELECT_TYPE,
    ) => {
      const value = event.target.value;

      let updateTypes = selectTypes;
      updateTypes[select] = value;

      if (select === SELECT_TYPE.PRODUCT) {
        setDropManufacture(manufactures[value]);
        setDropTypes(types[value]);
      }

      setSelectTypes([...updateTypes]);
    },
    [selectTypes],
  );

  const Menus = ({ value, onChange, menus }: any) => {
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

  const onTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      console.log(value, name);
      dispatch(
        productWriteSetData({
          key: name,
          value,
        }),
      );
    },
    [dispatch],
  );

  return (
    <div>
      <form>
        <TextField
          name="title"
          value={form.title}
          placeholder="제품명"
          onChange={onTextChange}
        />
        <TextField
          name="serial"
          value={form.serial}
          placeholder="시리얼"
          onChange={onTextChange}
        />
        <TextField
          name="size"
          value={form.size}
          placeholder="크기"
          onChange={onTextChange}
        />
        <TextField
          name="price"
          value={form.price}
          placeholder="가격"
          onChange={onTextChange}
        />
        <Menus
          value={selectTypes[SELECT_TYPE.PRODUCT]}
          onChange={(e: React.ChangeEvent<{ value: PRODUCT_TYPE }>) =>
            onChange(e, SELECT_TYPE.PRODUCT)
          }
          menus={products}
        />
        <Menus
          value={selectTypes[SELECT_TYPE.MANUFACTURE]}
          onChange={(e: React.ChangeEvent<{ value: PRODUCT_TYPE }>) =>
            onChange(e, SELECT_TYPE.MANUFACTURE)
          }
          menus={dropManufacture}
        />
        <Menus
          value={selectTypes[SELECT_TYPE.TYPE]}
          onChange={(e: React.ChangeEvent<{ value: PRODUCT_TYPE }>) =>
            onChange(e, SELECT_TYPE.TYPE)
          }
          menus={dorpTypes}
        />
      </form>
    </div>
  );
}

export default SelectTypeContainer;
