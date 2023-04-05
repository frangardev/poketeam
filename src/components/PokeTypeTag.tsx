import { Box } from "@chakra-ui/react";
import React from "react";

function PokeTypeTag({ type, color }) {
  return (
    <Box
      bgColor={color}
      color={"#4D4D4D"}
      borderRadius={"33px"}
      p={"4px 14px"}
      border={"1px solid black"}
    >
      {type}
    </Box>
  );
}

export default PokeTypeTag;
