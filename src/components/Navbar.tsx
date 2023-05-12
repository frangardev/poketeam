import { Flex, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function Navbar({ home }) {
  return (
    <Flex
      position={"static"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"100%"}
      bg={home ? "none" : "#FFFDF6"}
    >
      <Link href={"/"}>
        <Logo />
      </Link>
      <Button boxShadow={"none"} bg={"transparent"} _hover={"bg: transparent"}>
        <Icon icon="ri:search-line" width={"30px"} color="#545454" />
      </Button>
    </Flex>
  );
}

export default Navbar;
