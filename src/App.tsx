import {
  ChakraBaseProvider,
  Grid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Seach from "./components/Seach";
import Card from "./components/Card";
import { theme } from "./resources/theme";
import { getPokemons, getPokemonDetails } from "./utils/api";
import { setPokemons } from "./actions/index.js";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
import axios from "axios";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      console.log("pokemonsRes: ", pokemonsRes);

      const pokemonsDetailed = await Promise.all(
        pokemonsRes?.results.map((pokemon) => getPokemonDetails(pokemon.url))
      );
      console.log("pokemonsDetailed: ", pokemonsDetailed);

      dispatch(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, []);

  return (
    <ChakraBaseProvider theme={theme}>
      <Seach />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {pokemons.map((pokemon) => {
          return <Card key={pokemon?.name} pokemon={pokemon}></Card>;
        })}
      </Grid>
    </ChakraBaseProvider>
  );
}

export default App;

// Con conect
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);
