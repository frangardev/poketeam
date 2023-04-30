import React from "react";
import {
  Box,
  Flex,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

function Pokeball({ animation, width, color, colorCenter, cutomMargin }) {
  return (
    <Box
      w={width}
      h={width}
      m={cutomMargin}
      bg={"white"}
      borderRadius={"50%"}
      overflow={"hidden"}
      position={"relative"}
      animation={animation}
      // border={"1px solid #3e3e3e"}
    >
      <Box
        w={"100%"}
        h={"50%"}
        bgColor={color ? color : "#E9989D"}
        position={"absolute"}
        top={"0"}
      ></Box>
      {/* Centro de la pokeball */}
      <Flex
        position={"absolute"}
        top={"35%"}
        left={"35%"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"30%"}
        h={"30%"}
        borderRadius={"50%"}
        bg={"white"}
      >
        <Box
          w={"70%"}
          h={"70%"}
          bg={colorCenter ? colorCenter : color ? color : "white"}
          borderRadius={"50%"}
        ></Box>
      </Flex>
    </Box>
  );
}

export default Pokeball;
