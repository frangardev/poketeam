import React from "react";
import { GridItem, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { setFavorite } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

function Card({ pokemon }) {
  const dispatch = useDispatch<Dispatch<any>>();
  const favorite = useSelector((state: any) => state.favorite);
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
        alignContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        borderRadius={"1em"}
        bg={pokemon?.color}
        // h={"10em"}
      >
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          w={"100%"}
        />
        <Text>{pokemon?.name}</Text>
        {pokemon.name == favorite && <Text>&lt;3</Text>}
      </GridItem>
    </button>
  );
}

export default Card;
