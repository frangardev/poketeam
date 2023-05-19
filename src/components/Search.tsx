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
import {
  setOpenModalSearch,
  setOpenModalSearchNav,
} from "../../redux/slices/uiSlice";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ModalSearch from "./ModalSearch";

function Search() {
  const pokemons = useSelector(
    (state: any) => state.data.pokemons,
    shallowEqual
  );
  const dispatch = useDispatch();
  const isNavSearch = useSelector((state: any) => state.ui.openModalSearchNav);
  const isActiveSearch = useSelector((state: any) => state.ui.openModalSearch);

  const [resutlsSearch, setResultsSearch] = React.useState([]);

  const setIsActiveSearch = (isValue: boolean) => {
    dispatch(setOpenModalSearch(isValue));
  };

  const closeSearch = (isClose: boolean) => {
    dispatch(setOpenModalSearch(isClose));
    dispatch(setOpenModalSearchNav(isClose));
    setIsActiveSearch(isClose);
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
        position={
          isNavSearch ? "fixed" : isActiveSearch ? "absolute" : "relative"
        }
        bg={isActiveSearch ? "white" : "transparent"}
        p={isActiveSearch ? "20px 1em 49px" : "0"}
        borderRadius={"33px"}
        boxShadow={isActiveSearch ? "0px 4px 4px rgba(0, 0, 0, 0.08)" : "none"}
        zIndex={"200"}
        w={{ base: "70%", lg: "100%" }}
        maxW={"1000px"}
        top={isNavSearch && "20vh"}
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
              onClick={() => closeSearch(false)}
            >
              Cancelar
            </Button>
          )}
        </Flex>

        {/* Results Search */}
        {isActiveSearch && (
          <ModalSearch
            resutlsSearch={resutlsSearch}
            setIsActiveSearch={closeSearch}
          />
        )}
      </Box>

      {/* Close search */}
      {isActiveSearch && (
        <Box
          onClick={() => closeSearch(false)}
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
