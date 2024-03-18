export type Anchor = "top" | "left" | "bottom" | "right";

export type SidebarProps = {
  position: Anchor;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};
