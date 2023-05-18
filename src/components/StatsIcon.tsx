import React from "react";
import { addIcon } from "./BgCard";
import { Box, Image } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

function StatsIcon({ name, isStrong }) {
  const [imgTypePokemon, setimgTypePokemon] = React.useState();

  React.useEffect(() => {
    addIcon(name, setimgTypePokemon);
  }, []);

  return (
    <Box w={"30px"} position={"relative"}>
      <Image src={imgTypePokemon?.src} w={"100%"} />
      <Box position={"absolute"} top={"0"} right={"0"}>
        <Icon
          icon={isStrong ? "ic:twotone-check" : "ic:twotone-close"}
          fontSize={".75rem"}
        />
      </Box>
    </Box>
  );
}

export default StatsIcon;
