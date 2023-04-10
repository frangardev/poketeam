import React from "react";
import { Grid, Flex, Heading, Button } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Card from "./Card";

function TeamContainer() {
  const [isATeam, setIsATeam] = React.useState(false);
  const team = useSelector((state: any) =>
    state.getIn(["data", "team"], shallowEqual)
  ).toJS();

  React.useEffect(() => {
    if (team.length == 0) setIsATeam(false);
    else setIsATeam(true);
    console.log("My Team: ", team);
  }, [team]);

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
            {team.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon[0]}></Card>;
            })}
          </Grid>
          {team.length < 6 && (
            <Button
              colorScheme="pink"
              variant="solid"
              size="lg"
              mb={"100px"}
              borderRadius={"33px"}
              w={"auto"}
            >
              Complete Team
            </Button>
          )}
        </Flex>
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button
            colorScheme="pink"
            variant="solid"
            size="lg"
            mb={"100px"}
            borderRadius={"33px"}
          >
            create random team
          </Button>
        </Flex>
      )}
    </>
  );
}

export default TeamContainer;
