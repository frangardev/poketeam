import { Flex, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import {
  setOpenModalSearch,
  setOpenModalSearchNav,
} from "../../redux/slices/uiSlice";

function Navbar({ home }) {
  const dispatch = useDispatch();
  const openSearch = (isOpen: boolean) => {
    dispatch(setOpenModalSearch(isOpen));
    dispatch(setOpenModalSearchNav(isOpen));
  };
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
      <Button
        boxShadow={"none"}
        bg={"transparent"}
        _hover={"bg: transparent"}
        onClick={() => openSearch(true)}
      >
        <Icon icon="ri:search-line" width={"30px"} color="#545454" />
      </Button>
    </Flex>
  );
}

export default Navbar;
