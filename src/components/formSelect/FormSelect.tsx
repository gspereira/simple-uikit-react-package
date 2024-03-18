import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FormSelectProps } from "./formSelect.types";
import React from "react";

const FormSelect = ({
  label,
  options,
  value,
  onChange,
  ...styles
}: FormSelectProps) => {
  return (
    <FormControl variant="standard" {...styles}>
      <InputLabel id="simple-select-label">{label}</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={value}
        label={label}
        onChange={onChange}
        fullWidth
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
