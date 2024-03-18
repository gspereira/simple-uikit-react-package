import { FormControl, Input, InputLabel } from "@mui/material";
import { FormFieldProps } from "./formField.types";
import React from "react";

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  ...styles
}: FormFieldProps) => {
  return (
    <FormControl variant="standard" {...styles}>
      <InputLabel htmlFor="item-title">{label}</InputLabel>
      <Input
        id={name}
        value={value}
        type={type}
        onChange={onChange}
        fullWidth
      />
    </FormControl>
  );
};

export default FormField;
