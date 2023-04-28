import React from "react";
import { Box, Grid } from "@chakra-ui/layout";
import { useSelector, shallowEqual } from "react-redux";

import MiniCardType from "./MiniCardType";

function SectionTypesPokemon() {
  const types = useSelector(
    (state: any) => state.data.typesPokemon,
    shallowEqual
  );

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(150px, 2fr))"
      rowGap={"14px"}
      columnGap={"21px"}
      mb={"88px"}
    >
      {types?.map((type) => {
        return <MiniCardType key={type.id} type={type.name} />;
      })}
    </Grid>
  );
}

export default SectionTypesPokemon;
