import {
  createStyles,
  FormControl,
  InputLabel,
  Select as MaterialSelect,
  makeStyles,
  MenuItem,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { writeCategoryData } from 'lib/api/write';

export type SelectProps = {
  name: string;
  code: number;
  onChange: (e: any) => void;
  label: string;
  categories: any;
  onClick?: (e: any) => void;
};

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

function Select({
  name,
  code,
  onChange,
  label,
  categories,
  onClick,
}: SelectProps) {
  const classes = useStyles();

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
