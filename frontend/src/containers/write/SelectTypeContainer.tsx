import { withStyles } from '@material-ui/core';
import MuiSelect from '@material-ui/core/Select';
import SelectInputForm from 'components/productWrite/SelectInputForm';
import { RootState } from 'lib/modules';
import { productWriteSetData } from 'lib/modules/write/actions';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const products = {
  refrigerator: '냉장고',
  airConditioner: '에어컨',
  washingMachine: '세탁기',
  tv: 'TV',
};

const manufactures = {
  refrigerator: {
    0: 'LG',
    1: '삼성',
    2: '기타',
  },
  airConditioner: {
    0: 'LG',
    1: '삼성',
    2: '위니아',
    3: '캐리어',
    4: '기타',
  },
  washingMachine: {
    0: 'LG',
    1: '삼성',
    2: '기타',
  },
  tv: {
    0: 'LG',
    1: '삼성',
    2: '기타',
  },
};

const types = {
  refrigerator: {
    0: '일반형',
    1: '양문형',
    2: '4도어',
    3: '김치 냉장고',
  },
  airConditioner: {
    0: '벽걸이',
    1: '스탠드',
    2: '2in1',
  },
  washingMachine: {
    0: '통돌이',
    1: '드럼',
  },
  tv: {
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
    form: write.selectForm,
  }));
  const [selects, setSelects] = React.useState<any>({
    product: 0,
    manufacture: 0,
    type: 0,
  });

  const [viewManufacture, setViewManufacture] = React.useState<any>(
    manufactures.refrigerator,
  );
  const [viewTypes, setViewTypes] = React.useState<any>(types.refrigerator);

  const onChange = useCallback(
    (
      e: React.ChangeEvent<{
        name: string;
        value: string;
      }>,
    ) => {
      const { value, name } = e.target;

      let updateSelects = selects;
      updateSelects[name] = value;

      if (name === 'product') {
        updateSelects['manufacture'] = 0;
        updateSelects['type'] = 0;

        setViewManufacture(manufactures[value as 'refrigerator']);
        setViewTypes(types[value as 'refrigerator']);
      }

      setSelects({ ...updateSelects });

      dispatch(
        productWriteSetData({
          form: 'selectForm',
          key: name,
          value,
        }),
      );
    },
    [selects, dispatch],
  );

  const onTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;

      dispatch(
        productWriteSetData({
          form: 'selectForm',
          key: name,
          value,
        }),
      );
    },
    [dispatch],
  );

  const props = {
    form,
    onTextChange,
    onChange,
    selects,
    products,
    manufacture: viewManufacture,
    types: viewTypes,
  };

  return <SelectInputForm {...props} />;
}

export default SelectTypeContainer;
