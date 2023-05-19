import React from "react";
import { keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import Pokeball from "./Pokeball";

const spin = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

function Loader() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 2s linear`;

  return (
    <Pokeball
      animation={animation}
      color={"#FDD1B4"}
      width={"5em"}
      colorCenter={"#FDD1B4"}
      cutomMargin={"10vh auto"}
    />
  );
}

export default Loader;
