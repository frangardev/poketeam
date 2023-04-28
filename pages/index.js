
import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails, fetchTypesWithDetails } from '../redux/slices/dataSlice'
import { Box, Heading, Grid } from '@chakra-ui/layout'

import Loader from '../src/components/Loader'
import Card from '../src/components/Card'
import GridContainerCards from '../src/components/GridContainerCards'
import SectionTypesPokemon from '../src/components/SectionTypesPokemon'
import TeamContainer from '../src/components/TeamContainer'
import Search from '../src/components/Search'

function HomePage() {

  const loading = useSelector((state) => state.ui.loading)
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    dispatch(fetchTypesWithDetails());
  }, []);


  return (
    <Box>
      <Box maxW={"1000px"} m={"0 auto"}>
        <Heading as="h1" textAlign={"center"} m={"5vh auto 43px"} size="4xl">
          POKE TEAM
        </Heading>
        {/* <Search /> */}
        {/* <TeamContainer /> */}
        <TeamContainer />
        <SectionTypesPokemon />
        <Search />
        {/* <Loader /> */}
        {!!loading ? (
          <Loader />
        ) : (
          <GridContainerCards w={'100%'}>
            {pokemons.map((pokemon) => {
              return <Card key={pokemon?.name} pokemon={pokemon}></Card>;
            })}
          </GridContainerCards>
        )}
      </Box>
    </Box>
  )
}


export default HomePage;