
import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails, fetchTypesWithDetails } from '../redux/slices/dataSlice'
import { Box } from '@chakra-ui/layout'

import SectionTypesPokemon from '../src/components/SectionTypesPokemon'
import TeamContainer from '../src/components/TeamContainer'
import Navbar from '../src/components/Navbar'

function HomePage() {

  // const loading = useSelector((state) => state.ui.loading)
  // const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    dispatch(fetchTypesWithDetails());
  }, []);


  return (
    <Box maxW={"1000px"} m={"0 auto"}>
      {/* <Heading as="h1" textAlign={"center"} m={"5vh auto 43px"} size="4xl">
          POKE TEAM
        </Heading> */}
      <Box position={'sticky'} top={'0'} zIndex={'100'}>
        <Navbar />
      </Box>
      <TeamContainer />
      <SectionTypesPokemon />
    </Box>
  )
}


export default HomePage;