import React from "react";
import { Grid, Flex, Heading, Button } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { teamDetails } from "../utils/scripts/statsTeam";
import { completeTeam } from "../utils/scripts/completeTem";

import GridContainerCards from "./GridContainerCards";
import { setTeam } from "../../redux/slices/dataSlice";
import StatsTeam from "./StatsTeam";

function TeamContainer() {
  const [isATeam, setIsATeam] = React.useState(false);

  const [cTeam, setCTeam] = React.useState({});
  const team = useSelector((state: any) => state.data.team, shallowEqual);
  const pokemons = useSelector(
    (state: any) => state.data.pokemons,
    shallowEqual
  );
  const allTypes = useSelector(
    (state: any) => state.data.typesPokemon,
    shallowEqual
  );
  const dispatch = useDispatch();

  const updateTeam = (newPoke: any) => {
    dispatch(setTeam(newPoke));
  };

  const allTeam = teamDetails(team, allTypes);

  React.useEffect(() => {
    if (team.length == 0) setIsATeam(false);
    else setIsATeam(true);
  }, [team]);

  const createTeam = () => {
    setCTeam(completeTeam(allTeam, pokemons, updateTeam, allTypes));
    console.log("CompleteTeam: ", cTeam);
  };

  return (
    <>
      <Heading
        as="h2"
        size="xl"
        fontWeight={"300"}
        mb={"60px"}
        textAlign={"center"}
      >
        Your pokemon team
      </Heading>
      {isATeam ? (
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
        >
          <Grid
            templateColumns="repeat(auto-fill, minmax(19em, 1fr))"
            gap={6}
            mb={"80px"}
            w={"100%"}
          >
            {/* <GridContainerCards> */}
            {team.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon[0]}></Card>;
            })}
            {/* </GridContainerCards> */}
          </Grid>
          {team.length < 6 ? (
            <Button variant="primary" mb={"181px"} onClick={() => createTeam()}>
              Complete Team
            </Button>
          ) : (
            <StatsTeam stats={allTeam} />
          )}
        </Flex>
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"}>
          {pokemons.length > 0 ? (
            <Button variant="primary" mb={"181px"} onClick={() => createTeam()}>
              create random team
            </Button>
          ) : (
            <Skeleton
              startColor="colors.primary"
              endColor="colors.red"
              height="40px"
              w={"175px"}
              borderRadius={"33px"}
              mb={"181px"}
            />
          )}
        </Flex>
      )}
    </>
  );
}

export default TeamContainer;
