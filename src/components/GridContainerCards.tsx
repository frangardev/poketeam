import React from "react";
import { Grid } from "@chakra-ui/layout";

function GridContainerCards({ children }) {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(19em, 1fr))"
      gap={6}
      w={"100%"}
    >
      {children}
    </Grid>
  );
}

export default GridContainerCards;
