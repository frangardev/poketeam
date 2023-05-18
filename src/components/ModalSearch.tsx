import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setTeam } from "../../redux/slices/dataSlice";
import ResultSearch from "./ResultSearch";

function ModalSearch({ resutlsSearch, setIsActiveSearch }) {
  const dispatch = useDispatch();
  const updateFavorite = (newPoke: any) => {
    dispatch(setTeam(newPoke));
    setIsActiveSearch(false);
  };

  return (
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
  );
}

export default ModalSearch;
