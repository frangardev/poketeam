import React from "react";
import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import Pokeball from "./Pokeball";
// import logo from './logo.svg'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function Loader() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 2s linear`;
  React.useEffect(() => {
    console.log("Loading...");
  }, []);

  return (
    <Pokeball
      animation={animation}
      color={"#FDD1B4"}
      width={"5em"}
      colorCenter={"#FDD1B4"}
    />
  );
}

export default Loader;
