import { Select, TextField } from '@material-ui/core';
import Button from 'components/common/Button';
import React from 'react';

// adfsdf
interface selectInputFormProps {
  form: any;
  onTextChange: any;
  onChange: any;
  selects: any;
  products: any;
  manufacture: any;
  types: any;
  onUpload: any;
}

/**
 * `selectInputFormProps`
 * form: 폼
 * onTextChange: 텍스트 필드 변경 함수
 * onChange
 * selects: 셀렉트 박스 선택 값
 * produts: 제품
 */
function SelectInputForm({ ...props }: selectInputFormProps) {
  const {
    form,
    onTextChange,
    onChange,
    selects,
    products,
    manufacture,
    types,
    onUpload,
  } = props;

  const Menus = ({ name, value, type, menus }: any) => {
    return (
      <>
        {menus && (
          <Select name={name} native value={value} onChange={onChange}>
            {Object.entries(menus).map(([key, name]: any) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </Select>
        )}
      </>
    );
  };

  return (
    <div>
      <Button onClick={onUpload}>업로드</Button>
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
          name="product"
          value={selects['product']}
          onChange={onChange}
          menus={products}
        />
        <Menus
          name="manufacture"
          value={selects['manufacture']}
          onChange={onChange}
          menus={manufacture}
        />
        <Menus
          name="type"
          value={selects['type']}
          onChange={onChange}
          menus={types}
        />
      </form>
    </div>
  );
}

export default SelectInputForm;
