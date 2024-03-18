import { Button, styled } from "@mui/material";

export const ReturnButtonContainer = styled(Button)({
  padding: 0,
  margin: 0,
  width: "100%",
  aspectRatio: "1/1",
  maxWidth: "2rem",

  svg: {
    fontSize: "1.3em",
    backgroundColor: "#ffd369",
    color: "#ffffff",
    borderRadius: 28,
    width: "40px",
    height: "40px",
    padding: "0.5em",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: "#ffd369",
      filter: "brightness(0.8)",
    },
  },
});