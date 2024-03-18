import ReplyIcon from "@mui/icons-material/Reply";
import { ReturnButtonProps } from "./returnButton.types";
import { ReturnButtonContainer } from "./styles";
import React from "react";

const ReturnButton = ({ onClick }: ReturnButtonProps) => {
  return (
    <ReturnButtonContainer onClick={onClick}>
      <ReplyIcon fontSize="inherit" />
    </ReturnButtonContainer>
  );
};

export default ReturnButton;
