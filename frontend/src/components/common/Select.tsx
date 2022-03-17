import {
  createStyles,
  FormControl,
  InputLabel,
  Select as MaterialSelect,
  makeStyles,
  MenuItem,
  Theme,
} from '@material-ui/core';
import React, { useState } from 'react';
import { writeCategoryData } from 'lib/api/write';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      width: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

type test = {
  name: string;
  code: number;
  onChange: any;
  label: string;
  categories: any;
  onClick: any;
};

function Select({ name, code, onChange, label, categories, onClick }: test) {
  const classes = useStyles();

  // const [code, setCode] = React.useState('');
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   console.log(event.target.value);
  //   setCode(event.target.value as string);
  // };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        <MaterialSelect
          name={name}
          label={label}
          value={code}
          onChange={onChange}
        >
          {categories &&
            categories.map((category: writeCategoryData) => (
              <MenuItem
                key={category.code}
                value={
                  label === '제품' ? category.productCategoryId : category.code
                }
                onClick={
                  onClick
                    ? () => onClick(category.productCategoryId)
                    : undefined
                }
              >
                {category.name}
              </MenuItem>
            ))}
        </MaterialSelect>
      </FormControl>
    </>
  );
}

export default Select;
