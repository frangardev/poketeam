import React from "react";
import { GridItem, Text, Image } from "@chakra-ui/react";
import axios from "axios";

function Card({ pokemon }) {
  return (
    <GridItem
      alignContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      borderRadius={"1em"}
      bg={pokemon?.color}
      h={"10em"}
    >
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Text>{pokemon?.name}</Text>
    </GridItem>
  );
}

export default Card;
