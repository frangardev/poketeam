
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemonsWithDetails, fetchTypesWithDetails } from '../redux/slices/dataSlice'
import { Box, Flex } from '@chakra-ui/layout'

import SectionTypesPokemon from '../src/components/SectionTypesPokemon'
import TeamContainer from '../src/components/TeamContainer'
import Navbar from '../src/components/Navbar'
import HeaderHome from '../src/components/HeaderHome'

function HomePage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    dispatch(fetchTypesWithDetails());
  }, []);


  return (
    <React.Fragment>
      <Flex zIndex={'100'} position={'fixed'} left={'0'} w={'100%'} justifyContent={'center'}>
        <Box maxW={"1000px"} w={'100%'} p={{ base: '42px 33px', lg: '33px 0' }}>
          <Navbar home={true} />
        </Box>
      </Flex>
      <HeaderHome />
      <Box maxW={"1000px"} m={"0 auto"} w={'82%'}>
        <TeamContainer />
        <SectionTypesPokemon />
      </Box>
    </React.Fragment>
  )
}


export default HomePage;