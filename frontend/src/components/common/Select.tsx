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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

function Select() {
  const classes = useStyles();

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>제품</InputLabel>
        <MaterialSelect
          label="제품"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>냉장고</MenuItem>
          <MenuItem value={3}>에어컨</MenuItem>
          <MenuItem value={4}>세탁기</MenuItem>
        </MaterialSelect>
      </FormControl>
    </>
  );
}

export default Select;
