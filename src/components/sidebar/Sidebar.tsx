import { Box, Button, Drawer } from "@mui/material";
import React, { useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Anchor, SidebarProps } from "./sidebar.types";


const Sidebar = (props: SidebarProps) => {
  const [anchorSide, setAnchorSide] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    toggleDrawer(props.position, props.open);
  }, [props.open, props.position]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setAnchorSide({ ...anchorSide, [anchor]: open });
      };

  return (
    <Drawer
      anchor={props.position}
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <Box
        sx={{
          width: 250,
          paddingTop: "20%",
          backgroundColor: "#E6E6E6",
          height: "100%",
          overflow: "hidden",
        }}
        role="presentation"
      >
        <Button
          onClick={() => props.setOpen(false)}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            overflow: "hidden",
          }}
        >
          <CancelIcon
            fontSize="large"
            style={{
              color: "#4E4E4E",
            }}
          />
        </Button>

        {props.children}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
