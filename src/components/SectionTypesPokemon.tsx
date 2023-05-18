import React from "react";
import { Box, Grid, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import { useSelector, shallowEqual } from "react-redux";

import MiniCardType from "./MiniCardType";
import Search from "./Search";

function SectionTypesPokemon() {
  const types = useSelector(
    (state: any) => state.data.typesPokemon,
    shallowEqual
  );
  const loading = useSelector((state: any) => state.ui.loading);
  const isActiveSearch = useSelector((state: any) => state.ui.openModalSearch);
  const loaderTypesArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <Box>
      <Text variant={"subTitle"} mb={"10px"}>
        Add your team
      </Text>

      <Search />

      <Grid
        templateColumns="repeat(auto-fill, minmax(150px, 2fr))"
        rowGap={"14px"}
        columnGap={"21px"}
        mb={"88px"}
        mt={isActiveSearch && "106px"}
      >
        {loading
          ? loaderTypesArray?.map((type) => {
              return (
                <Skeleton
                  key={type}
                  startColor="#fff"
                  endColor="#ececec"
                  height="45px"
                  borderRadius={"33px"}
                />
              );
            })
          : types?.map((type) => {
              return <MiniCardType key={type.id} type={type.name} />;
            })}
      </Grid>
    </Box>
  );
}

export default SectionTypesPokemon;
