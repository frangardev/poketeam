import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Pokeball from "./Pokeball";

function Logo() {
  return (
    <Flex w={"max-content"} justifyContent={"center"} alignItems={"center"}>
      <Text variant={"title"}>P</Text>
      <Pokeball color={"#F7B3E4"} width={"2.5em"} colorCenter={"#E998C1"} />
      <Text variant={"title"}>KE TEAM</Text>
    </Flex>
  );
}

export default Logo;
