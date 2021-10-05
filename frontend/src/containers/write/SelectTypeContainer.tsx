import { FormControl, InputLabel, withStyles } from '@material-ui/core';
import MuiSelect from '@material-ui/core/Select';
import TextField from 'components/common/TextField';
import React from 'react';

const products = [
  {
    value: 0,
    name: '냉장고',
  },
  {
    value: 1,
    name: '에어컨',
  },
  {
    value: 2,
    name: '세탁기',
  },
  {
    value: 3,
    name: 'TV',
  },
  {
    value: 4,
    name: '기타제품',
  },
];

const manufactures = [
  {
    value: 0,
    name: 'LG',
  },
  {
    value: 1,
    name: '삼성',
  },
  {
    value: 2,
    name: '기타',
  },
];

const airConditionerManufactures = [
  {
    value: 0,
    name: 'LG',
  },
  {
    value: 1,
    name: '삼성',
  },
  {
    value: 2,
    name: '위니아',
  },
  {
    value: 3,
    name: '캐리어',
  },
  {
    value: 4,
    name: '기타',
  },
];

const refrigeratorTypes = [
  {
    value: 0,
    name: '일반형',
  },
  {
    value: 1,
    name: '양문형',
  },
  {
    value: 2,
    name: '4도어',
  },
  {
    value: 3,
    name: '김치 냉장고',
  },
];

const airConditionerTypes = [
  {
    value: 0,
    name: '벽걸이',
  },
  {
    value: 1,
    name: '스탠드',
  },
  {
    value: 2,
    name: '2in1',
  },
];

const washingMachineTypes = [
  {
    value: 0,
    name: '통돌이',
  },
  {
    value: 1,
    name: '드럼',
  },
];

const tvTypes = [
  {
    value: 0,
    name: 'LED',
  },
  {
    value: 1,
    name: 'LCD',
  },
];

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
  const [product, setProduct] = React.useState<number>(0);
  const [manufacture, setManufacture] = React.useState<number>(0);
  const [type, setType] = React.useState<number>(0);

  const [dropManufacture, setDropManufacture] = React.useState<any>(
    manufactures,
  );
  const [dorpTypes, setDropTypes] = React.useState<any>(refrigeratorTypes);

  const productChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as number;

    setProduct(value);
    setManufacture(0);
    setType(0);

    setManufactures(value);
    setTypes(value);
  };
  const manufactureChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setManufacture(event.target.value as number);
  };
  const typeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as number);
  };

  const setManufactures = (value: any) =>
    value !== '1'
      ? setDropManufacture(manufactures)
      : setDropManufacture(airConditionerManufactures);

  const setTypes = (value: any) => {
    switch (value) {
      case '0':
        setDropTypes(refrigeratorTypes);
        break;
      case '1':
        setDropTypes(airConditionerTypes);
        break;
      case '2':
        setDropTypes(washingMachineTypes);
        break;
      case '3':
        setDropTypes(tvTypes);
        break;
    }
  };

  const Menus = ({ value, onChange, menus }: any) => {
    return (
      <>
        {menus && (
          <Select native value={value} onChange={onChange}>
            {menus.map((menu: any) => (
              <option value={menu.value}>{menu.name}</option>
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
      <Menus value={product} onChange={productChange} menus={products} />
      <Menus
        value={manufacture}
        onChange={manufactureChange}
        menus={dropManufacture}
      />
      <Menus value={type} onChange={typeChange} menus={dorpTypes} />
    </div>
  );
}

export default SelectTypeContainer;
