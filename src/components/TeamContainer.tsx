import React from "react";
import { Grid, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { teamDetails } from "../utils/scripts/statsTeam";
import { completeTeam } from "../utils/scripts/completeTem";

import GridContainerCards from "./GridContainerCards";
import { setTeam } from "../../redux/slices/dataSlice";

function TeamContainer() {
  const [isATeam, setIsATeam] = React.useState(false);

  const [cTeam, setCTeam] = React.useState({});
  // const team = useSelector((state: any) =>
  //   state.getIn(["data", "team"], shallowEqual)
  // ).toJS();
  // const pokemons = useSelector((state: any) =>
  //   state.getIn(["data", "pokemons"], shallowEqual)
  // ).toJS();
  const team = useSelector((state: any) => state.data.team, shallowEqual);
  const pokemons = useSelector(
    (state: any) => state.data.pokemons,
    shallowEqual
  );
  // const dispatch = useDispatch<Dispatch<any>>();
  const dispatch = useDispatch();

  const updateTeam = (newPoke: any) => {
    dispatch(setTeam(newPoke));
  };

  const allTeam = teamDetails();
  console.log("Stats my Team: ", allTeam);

  React.useEffect(() => {
    if (team.length == 0) setIsATeam(false);
    else setIsATeam(true);
  }, [team]);

  // React.useEffect(() => {
  //   const cTeam = completeTeam();
  //   if (team.length !== 5) console.log("CompleteTeam: ", cTeam);
  // }, [isATeam]);

  const createTeam = () => {
    setCTeam(completeTeam(allTeam, pokemons, updateTeam));
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
          {team.length < 6 && (
            <Button variant="primary" mb={"181px"} onClick={() => createTeam()}>
              Complete Team
            </Button>
          )}
        </Flex>
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button variant="primary" mb={"181px"} onClick={() => createTeam()}>
            create random team
          </Button>
        </Flex>
      )}
    </>
  );
}

export default TeamContainer;
