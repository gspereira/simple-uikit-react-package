import React from "react";
import { Container } from "./styles";
import { CardProps } from "./card.types";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, forwardedRef, ...styles }: CardProps, ref) => {
    return (
      <Container ref={forwardedRef || ref} {...styles}>
        {children}
      </Container>
    );
  },
);

export default Card;