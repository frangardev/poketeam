import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function ResultSearch({ namePokemon, imagePokemon, color, action }) {
  return (
    <button onClick={() => action()}>
      <Flex
        bgColor={color}
        alignItems={"center"}
        h={"75px"}
        borderRadius={"33px"}
        gap={".9em"}
        p={"0 1.1em"}
        overflow={"hidden"}
        marginBottom={".5em"}
      >
        <Image
          src={imagePokemon}
          alt={namePokemon}
          w={{ base: "68px", md: "78px", lg: "96px" }}
        />
        <Text
          fontSize={{ base: "1.5rem", md: "2em", lg: "40px" }}
          fontWeight={"300"}
          opacity={".7"}
        >
          {namePokemon}
        </Text>
      </Flex>
    </button>
  );
}

export default ResultSearch;
