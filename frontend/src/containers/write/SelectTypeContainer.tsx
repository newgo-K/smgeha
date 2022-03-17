import { withStyles } from '@material-ui/core';
import MuiSelect from '@material-ui/core/Select';
import SelectInputForm from 'components/productWrite/SelectInputForm';
import { RootState } from 'lib/modules';
import { productWriteSetForm } from 'lib/modules/write/actions';
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
    form: write.writeForm,
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
      let { value, name } = e.target;

      let updateSelects = selects;
      updateSelects[name] = value;

      if (name === 'product') {
        updateSelects['manufacture'] = 0;
        updateSelects['type'] = 0;

        setViewManufacture(manufactures[value as 'refrigerator']);
        setViewTypes(types[value as 'refrigerator']);

        value = (Object.entries(products).findIndex(
          (a: any) => a[0] === value,
        ) as any) as string;
      }

      setSelects({ ...updateSelects });

      dispatch(
        productWriteSetForm({
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
        productWriteSetForm({
          key: name,
          value,
        }),
      );
    },
    [dispatch],
  );

  const onUpload = useCallback(() => {
    const value = Object.keys(products)[form.product];

    const sizes = {
      refrigerator: {
        0: 299,
        1: 499,
        2: 699,
        3: 700,
      },
      airConditioner: {
        0: 8,
        1: 12,
        2: 18,
        3: 19,
      },
      washingMachine: {
        0: 10,
        1: 15,
        2: 16,
      },
      tv: {
        0: 39,
        1: 50,
        2: 51,
      },
    };

    const a = sizes[value as 'refrigerator'];

    const size = form.size;
    let c = Object.keys(a).length - 1;

    // for (const abc in a) {
    //   if (parseInt(size) < parseInt(abc[1])) {
    //     c = parseInt(abc[0]);
    //     break;
    //   }
    // }

    dispatch(
      productWriteSetForm({
        key: 'size',
        c,
      }),
    );

    // dispatch(productWriteUploadAsync.request(form));
  }, [dispatch, form]);

  const props = {
    form,
    onTextChange,
    onChange,
    selects,
    products,
    manufacture: viewManufacture,
    types: viewTypes,
    onUpload,
  };

  return <SelectInputForm {...props} />;
}

export default SelectTypeContainer;
