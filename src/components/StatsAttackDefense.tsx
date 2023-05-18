import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { log } from "console";
import StatsIcon from "./StatsIcon";

function StatsAttackDefense({
  attack,
  defense,
  isViewAttack,
  setIsViewAttack,
}) {
  const types = useSelector(
    (state: any) => state.data.typesPokemon,
    shallowEqual
  );
  // const rta = numbers.some(item => item % 2 === 0)
  const notStrong = types.map((type) => {
    const isNotStrong = defense.some((item) => item.name == type.name);
    return {
      name: type.name,
      isStrong: !isNotStrong,
    };
  });
  const strong = types.map((type) => {
    const isNotStrong = attack.some((item) => item.name == type.name);
    return {
      name: type.name,
      isStrong: !isNotStrong,
    };
  });

  console.log("notStrong ", notStrong);
  console.log("strong ", strong);

  return (
    <Box p={"0 34px"}>
      <Flex gap={"43px"} mb={"1.25em"}>
        <Button
          variant={"select"}
          borderBottom={isViewAttack ? "1px solid" : "none"}
          opacity={isViewAttack ? "1" : ".4"}
          onClick={() => setIsViewAttack(true)}
        >
          Attack
        </Button>
        <Button
          variant={"select"}
          borderBottom={!isViewAttack ? "1px solid" : "none"}
          opacity={!isViewAttack ? "1" : ".4"}
          onClick={() => setIsViewAttack(false)}
        >
          Defence
        </Button>
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(2em, 1fr))" gap={"7px"}>
        {/* {isViewAttack
          ? notStrong?.map((type) => {
              return <Text>{type.name}</Text>;
            })
          : defense?.map((type) => {
              return <Text>{type.name}</Text>;
            })} */}
        {notStrong.map((type) => {
          return (
            <StatsIcon
              key={type.name}
              name={type.name}
              isStrong={type.isStrong}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

export default StatsAttackDefense;
