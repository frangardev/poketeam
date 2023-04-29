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

import ResultSearch from "./ResultSearch";
import { setTeam } from "../../redux/slices/dataSlice";

function Search() {
  const pokemons = useSelector(
    (state: any) => state.data.pokemons,
    shallowEqual
  );
  const dispatch = useDispatch();

  const [resutlsSearch, setResultsSearch] = React.useState([]);
  const [isActiveSearch, setIsActiveSearch] = React.useState(false);

  const updateFavorite = (newPoke: any) => {
    dispatch(setTeam(newPoke));
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
        position={isActiveSearch ? "absolute" : "relative"}
        bg={isActiveSearch ? "white" : "transparent"}
        p={isActiveSearch ? "20px 1em 49px" : "0"}
        borderRadius={"33px"}
        boxShadow={isActiveSearch ? "0px 4px 4px rgba(0, 0, 0, 0.08)" : "none"}
        zIndex={"200"}
        w={"100%"}
        maxW={"1000px"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1em"}
          mb={"45px"}
          zIndex={"200"}
        >
          <InputGroup
            bg={"colors.while"}
            borderRadius={"58px"}
            overflow={"hidden"}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={() => setIsActiveSearch(true)}
          >
            <InputLeftAddon
              bg={"colors.while"}
              border={"none"}
              p={"10px 19px 10px 21px "}
              h={"100%"}
              children={
                <Icon icon="ri:search-line" width={"30px"} color="#545454" />
              }
            />
            <Input
              focusBorderColor="transparent"
              placeholder="Search"
              _placeholder={{
                opacity: 0.6,
                color: "#545454",
                fontSize: "1.25rem",
                fontWeight: "300",
              }}
              border={"none"}
              fontSize={"1.25rem"}
              p={"1em 0"}
              onChange={(e) => searchPokemon(e.target.value)}
            />
          </InputGroup>
          {isActiveSearch && (
            <Button
              bgColor={"transparent"}
              fontSize={"1.25rem"}
              fontWeight={"300"}
              opacity={".5"}
              cursor={"pointer"}
              boxShadow={"none"}
              _hover={{ opacity: ".7" }}
              zIndex={"200"}
              onClick={() => setIsActiveSearch(false)}
            >
              Cancelar
            </Button>
          )}
        </Flex>

        {/* Results Search */}
        {isActiveSearch && (
          <Flex
            position={"relative"}
            flexDirection={"column"}
            w={"100%"}
            zIndex={"300"}
            maxH={"50vh"}
            overflowY={"scroll"}
          >
            {resutlsSearch.map((poke: any) => (
              <ResultSearch
                key={poke.name}
                namePokemon={poke?.name}
                imagePokemon={poke?.sprites.front_default}
                color={poke?.types[0].color}
                action={() => updateFavorite([poke])}
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
          bgColor={"blackAlpha.100"}
        ></Box>
      )}
    </>
  );
}
export default Search;
