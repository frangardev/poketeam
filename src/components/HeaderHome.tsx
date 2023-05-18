import React from "react";
import { Button, Text, Image, Flex, Box } from "@chakra-ui/react";
import Pokeball from "./Pokeball";
import Logo from "./Logo";
import Link from "next/link";
// import { Link } from 'react-scroll'

function HeaderHome() {
  return (
    <Flex
      position={"relative"}
      minH={"95vh"}
      w={"100vw"}
      maxW={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* Bg decoration */}
      <Box
        h={{ base: "40%", md: "50%", lg: "65%" }}
        style={{ aspectRatio: "1/1" }}
        position={"absolute"}
        zIndex={-10}
      >
        <Pokeball width={"100%"} color={"#FDD1B4"} colorCenter={"#D6F5FC"} />
      </Box>
      <Box
        position={"absolute"}
        bottom={"-55px"}
        left={"-35px"}
        h={{ base: "22%", md: "30%", lg: "35%" }}
        style={{ aspectRatio: "1/1" }}
        zIndex={-10}
      >
        <Pokeball width={"100%"} color={"#F7B3E4"} colorCenter={"#FDD1B4"} />
      </Box>
      <Box
        position={"absolute"}
        top={"10%"}
        right={"25%"}
        h={{ base: "6%", md: "7%", lg: "8%" }}
        style={{ aspectRatio: "1/1" }}
        zIndex={-10}
      >
        <Pokeball width={"100%"} color={"#D6F5FC"} colorCenter={"#FDD1B4"} />
      </Box>
      <Box
        position={"absolute"}
        top={"20%"}
        right={"10%"}
        h={{ base: "10%", md: "12%", lg: "15%" }}
        style={{ aspectRatio: "1/1" }}
        zIndex={-10}
      >
        <Pokeball width={"100%"} color={"#E3EFC9"} colorCenter={"#FDD1B4"} />
      </Box>

      <Box
        position={"absolute"}
        top={"0"}
        left={{ base: "-48px", md: "-48px", lg: "0" }}
        w={"52%"}
        h={"25%"}
        bg={"#FFEB99"}
        opacity={".3"}
        zIndex={-20}
      ></Box>

      {/* Buttons and logo */}
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"22px"}
        paddingTop={"4.2em"}
      >
        <Logo header />
        <Flex gap={"12px"}>
          {/* <ScrollLink to="createTeam" smooth={true} duration={800}> */}
          <Link href={"#createTeam"}>
            <Button variant={"primary"}>Create Team</Button>
          </Link>
          {/* </ScrollLink> */}

          <Link href={`/type/all`}>
            <Button variant={"secondary"}>all pokemons</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HeaderHome;
