import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Pokeball from "./Pokeball";

function Logo({ header }) {
  return (
    <Flex w={"max-content"} justifyContent={"center"} alignItems={"center"}>
      <Text
        variant={"title"}
        fontSize={
          header
            ? { base: "64px", md: "100px", lg: "128px" }
            : { base: "33px", md: "40px", lg: "48px" }
        }
      >
        P
      </Text>
      <Pokeball
        color={"#F7B3E4"}
        width={
          header
            ? { base: "48px", md: "85px", lg: "105px" }
            : { base: "1.8em", md: "2em", lg: "2.5em" }
        }
        colorCenter={"#E998C1"}
      />
      <Text
        variant={"title"}
        fontSize={
          header
            ? { base: "64px", md: "100px", lg: "128px" }
            : { base: "33px", md: "40px", lg: "48px" }
        }
      >
        KE TEAM
      </Text>
    </Flex>
  );
}

export default Logo;
