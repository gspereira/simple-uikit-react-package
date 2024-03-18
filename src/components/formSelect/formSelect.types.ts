import { SelectChangeEvent } from "@mui/material";

export type FormSelectProps = {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
};
