export type ReturnButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};
