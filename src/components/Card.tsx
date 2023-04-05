import React from "react";
import { GridItem, Text, Image, Flex, Box } from "@chakra-ui/react";
import axios from "axios";
import { setFavorite } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import PokeTypeTag from "./PokeTypeTag";
import { Icon } from "@iconify/react";
import BgCard from "./BgCard";

function Card({ pokemon }) {
  const dispatch = useDispatch<Dispatch<any>>();
  const favorite = useSelector((state: any) => state.get("favorite"));
  // let dispatch: Dispatch<any>;

  const updateFavorite = (newPokemonFavorite: string) => {
    dispatch(setFavorite(newPokemonFavorite));
    // dispatchNew({ type: SET_FAVORITE, payload: newPokemonFavorite });

    console.log("newPokemonFavorite: ", favorite);
  };

  return (
    <button
      key={pokemon?.name}
      onClick={() => {
        updateFavorite(pokemon.name);
      }}
    >
      <GridItem
        position={"relative"}
        alignContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        borderRadius={"1em"}
        bg={pokemon?.color}
        pb={"5%"}
        overflow={"hidden"}
      >
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          w={"100%"}
          zIndex={"10"}
        />
        <Text
          position={"absolute"}
          left={"5%"}
          bottom={"5%"}
          fontSize={"1.5rem"}
          fontWeight={"600"}
          zIndex={"20"}
        >
          {pokemon?.name}
        </Text>

        <Flex
          position={"absolute"}
          bottom={"5%"}
          right={"5%"}
          flexDirection={"column"}
          gap={"6px"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={"30"}
        >
          {pokemon.types.map((typePoke) => (
            <PokeTypeTag
              key={typePoke.type.name}
              type={typePoke.type.name}
              color={pokemon.color}
            />
          ))}
        </Flex>

        {pokemon.name == favorite && (
          <Box position={"absolute"} right={"5%"} top={"5%"} zIndex={"30"}>
            <Icon icon="gg:pokemon" width={"33px"} />
          </Box>
        )}
        <BgCard type={pokemon.types[0].type.name} />
      </GridItem>
    </button>
  );
}

export default Card;
