import React from "react";
import { GridItem, Text, Image, Flex, Box } from "@chakra-ui/react";
import axios from "axios";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import PokeTypeTag from "./PokeTypeTag";
import { Icon } from "@iconify/react";
import BgCard from "./BgCard";
import { setTeam } from "../../redux/slices/dataSlice";
import { RootState } from "../../redux/store";

function Card({ pokemon }) {
  // const dispatch = useDispatch<Dispatch<any>>();
  const dispatch = useDispatch();
  const team = useSelector((state: RootState) => state.data.team, shallowEqual);

  const [isFromTeam, setIsFromTeam] = React.useState(false);
  // let dispatch: Dispatch<any>;

  const updateFavorite = (newPoke: any) => {
    dispatch(setTeam(newPoke));
  };

  React.useEffect(() => {
    const pokeIsTeam = team.some(
      (pokeTeam) => pokeTeam[0].name === pokemon.name
    );
    setIsFromTeam(pokeIsTeam);
  }, [team]);

  return (
    <button
      key={pokemon?.name}
      onClick={() => {
        updateFavorite([pokemon]);
      }}
    >
      <GridItem
        position={"relative"}
        alignContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        borderRadius={"1em"}
        bg={pokemon?.types[0]?.color}
        pb={"5%"}
        overflow={"hidden"}
      >
        <Image
          src={pokemon?.sprites?.front_default}
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
              color={typePoke.color}
            />
          ))}
        </Flex>

        {isFromTeam && (
          <Box position={"absolute"} right={"5%"} top={"5%"} zIndex={"30"}>
            <Icon icon="gg:pokemon" width={"33px"} color="#545454" />
          </Box>
        )}
        <BgCard type={pokemon.types[0].type.name} />
      </GridItem>
    </button>
  );
}

export default Card;
