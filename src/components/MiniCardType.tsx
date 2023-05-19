import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";
import { addIcon } from "./BgCard";
import Link from "next/link";

function MiniCardType({ type }) {
  const [imgTypePokemon, setimgTypePokemon] = React.useState();

  React.useEffect(() => {
    addIcon(type, setimgTypePokemon);
  }, []);
  return (
    <Link href={`/type/${type}`}>
      <Flex
        w={"100%"}
        bgColor={"#fff"}
        alignItems={"center"}
        gap={"12px"}
        borderRadius={"33px"}
      >
        <Image src={imgTypePokemon?.src} h={"100%"} />
        <Text fontSize={"20px"} fontWeight={"300"} color={"#575862"}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Text>
      </Flex>
    </Link>
  );
}

export default MiniCardType;
