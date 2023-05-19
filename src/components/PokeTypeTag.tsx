import { Box } from "@chakra-ui/react";
import React from "react";

function PokeTypeTag({ type, color }) {
  return (
    <Box
      bgColor={color}
      color={"#4D4D4D"}
      borderRadius={"33px"}
      p={"4px 14px"}
      boxShadow={"0px 0px 8px rgba(0, 0, 0, 0.08)"}
    >
      {type}
    </Box>
  );
}

export default PokeTypeTag;
