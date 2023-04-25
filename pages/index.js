
import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails } from '../redux/slices/dataSlice'
import { Box, Heading, Grid } from '@chakra-ui/layout'

import Loader from '../src/components/Loader'
import Card from '../src/components/Card'


function HomePage() {

  const loading = useSelector((state) => state.ui.loading)
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);


  return (
    <Box>
      <Box maxW={"1000px"} m={"0 auto"}>
        <Heading as="h1" textAlign={"center"} m={"5vh auto 43px"} size="4xl">
          POKE TEAM
        </Heading>
        {/* <Search /> */}
        {/* <TeamContainer /> */}

        {/* <Grid
          templateColumns="repeat(auto-fill, minmax(150px, 2fr))"
          rowGap={"14px"}
          columnGap={"21px"}
          mb={"88px"}
        >
          {types.map((type) => {
            return <MiniCardType key={type.id} type={type.name} />;
          })}
        </Grid> */}
        {/* <Loader /> */}
        {!!loading ? (
          <Loader />
        ) : (
          <Grid templateColumns="repeat(auto-fill, minmax(19em, 9em))" gap={6}>
            {pokemons.map((pokemon) => {
              return <Card key={pokemon?.name} pokemon={pokemon}></Card>;
            })}
          </Grid>
        )}
      </Box>
    </Box>
  )
}


export default HomePage;