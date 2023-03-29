import React from "react";
import { GridItem, Text, Image } from "@chakra-ui/react";
import axios from "axios";

function Card({ pokemon, index }) {
  const [bgColor, setBgColor] = React.useState("#fff");
  const [typePokemon, setTypePokemon] = React.useState("");

  const fetchInfoPokemon = async (urlInfo) => {
    try {
      const { data } = await axios.get(urlInfo);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await fetchInfoPokemon(pokemon.url);
      setTypePokemon(pokemonsRes.types[0].type.name);
      console.log(pokemonsRes.types[0].type.name);
    };
    fetchPokemons();
  }, []);

  React.useEffect(() => {
    switch (typePokemon) {
      case "grass":
        setBgColor("#62BC5C");
        break;
      case "fire":
        setBgColor("#FF9D52");
        break;
      case "water":
        setBgColor("#4C91D6");
        break;
      case "normal":
        setBgColor("#919AA3");
        break;
      case "poison":
        setBgColor("#AC6BC9");
        break;
      case "electric":
        setBgColor("#F0D434");
        break;
      case "ground":
        setBgColor("#D97843");
        break;
      case "fairy":
        setBgColor("#90AADD");
        break;
      case "psychic":
        setBgColor("#F9717A");
        break;
      case "rock":
        setBgColor("#C8B88C");
        break;
      case "bug":
        setBgColor("#91C229");
        break;
      case "fighting":
        setBgColor("#CF3E69");
        break;
      case "bug":
        setBgColor("#27a747");
        break;
      case "ghost":
        setBgColor("#5269AD");
        break;
      case "steel":
        setBgColor("#5A8FA1");
        break;
      case "ice":
        setBgColor("#73D0BE");
        break;
      case "dark":
        setBgColor("#5B5169");
        break;
      case "fairy":
        setBgColor("#ED91E8");
        break;
      case "dragon":
        setBgColor("#026DC6");
        break;

      default:
        break;
    }
  }, [setTypePokemon]);

  return (
    <GridItem
      alignContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      borderRadius={"1em"}
      bg={bgColor}
      h={"10em"}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
        alt={pokemon.name}
      />
      <Text>{pokemon?.name}</Text>
    </GridItem>
  );
}

export default Card;
