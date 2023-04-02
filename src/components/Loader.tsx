import React from "react";
import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
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
    <Box
      w={"5em"}
      h={"5em"}
      m={"10vh auto"}
      bg={"white"}
      borderRadius={"50%"}
      overflow={"hidden"}
      position={"relative"}
      animation={animation}
      border={"1px solid #3e3e3e"}
    >
      <Box
        w={"100%"}
        h={"50%"}
        bgColor={"#E9989D"}
        position={"absolute"}
        top={"0"}
        borderBottom={"1px solid #3e3e3e"}
      ></Box>
      <Box
        w={"1em"}
        h={"1em"}
        bg={"white"}
        borderRadius={"50%"}
        position={"absolute"}
        top={"40%"}
        left={"40%"}
        border={"1px solid #3e3e3e"}
      ></Box>
    </Box>
  );
}

export default Loader;
