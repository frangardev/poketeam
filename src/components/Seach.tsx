import React from "react";
import { Icon } from "@iconify/react";
import {
  Input,
  Box,
  Flex,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { setFavorite } from "../actions";
import ResultSearch from "./ResultSearch";

function Seach() {
  const dispatch = useDispatch<Dispatch<any>>();
  const pokemons = useSelector((state: any) =>
    state.getIn(["data", "pokemons"], shallowEqual)
  ).toJS();

  const [resutlsSearch, setResultsSearch] = React.useState([]);
  const [isActiveSearch, setIsActiveSearch] = React.useState(false);

  const updateFavorite = (newPokemonFavorite: string) => {
    dispatch(setFavorite(newPokemonFavorite));
    setIsActiveSearch(false);
  };

  const searchPokemon = (searchValue) => {
    const searchedPokemons = pokemons.filter((pokemon) => {
      const pokemonName = pokemon.name.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return pokemonName.includes(searchText);
    });
    setResultsSearch(searchedPokemons);
  };

  return (
    <>
      <Box
        position={"relative"}
        bg={isActiveSearch ? "white" : "transparent"}
        p={isActiveSearch ? "20px 1em 49px" : "0"}
        borderRadius={"33px"}
        boxShadow={isActiveSearch ? "0px 4px 4px rgba(0, 0, 0, 0.08)" : "none"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1em"}
          mb={"45px"}
          zIndex={"200"}
        >
          <InputGroup
            bg={"#F6F6F6"}
            borderRadius={"58px"}
            overflow={"hidden"}
            onClick={() => setIsActiveSearch(true)}
          >
            <InputLeftAddon
              bg={"#F6F6F6"}
              border={"none"}
              p={"12px 34px"}
              h={"100%"}
              children={
                <Icon icon="ri:search-line" width={"58px"} color="#545454" />
              }
            />
            <Input
              focusBorderColor="transparent"
              placeholder="Search"
              _placeholder={{
                opacity: 0.6,
                color: "#545454",
                fontSize: "40px",
                fontWeight: "300",
              }}
              border={"none"}
              fontSize={"40px"}
              p={"1em 0"}
              onChange={(e) => searchPokemon(e.target.value)}
            />
          </InputGroup>
          {isActiveSearch && (
            <Button
              bgColor={"transparent"}
              fontSize={"40px"}
              fontWeight={"300"}
              opacity={".5"}
              cursor={"pointer"}
              _hover={{ opacity: ".7" }}
              onClick={() => setIsActiveSearch(false)}
            >
              Cancelar
            </Button>
          )}
        </Flex>

        {/* Results Search */}
        {isActiveSearch && (
          <Flex
            // position={"absolute"}
            position={"relative"}
            // left={"0"}
            // top={"100px"}
            flexDirection={"column"}
            w={"100%"}
            zIndex={"300"}
            maxH={"50vh"}
            overflowY={"scroll"}
          >
            {resutlsSearch.map((poke) => (
              // <Text>{poke.name}</Text>
              <ResultSearch
                key={poke.name}
                namePokemon={poke?.name}
                imagePokemon={poke?.sprites.front_default}
                color={poke?.types[0].color}
                action={() => updateFavorite(poke.name)}
              />
            ))}
          </Flex>
        )}
      </Box>

      {/* Close search */}
      {isActiveSearch && (
        <Box
          onClick={() => setIsActiveSearch(false)}
          position={"fixed"}
          w={"100vw"}
          h={"100vh"}
          top={"0"}
          left={"0"}
          zIndex={"100"}
        ></Box>
      )}
    </>
  );
}
export default Seach;
