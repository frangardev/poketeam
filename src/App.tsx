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
import { getPokemons } from "./utils/api";
import { setPokemons } from "./actions/index.js";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
import axios from "axios";

function App() {
  const pokemons = useSelector((state: TypeState) => state.pokemons);
  const dispath = useDispatch();

  // function App({ pokemons, setPokemons }) {
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes?.results);
      dispath(setPokemons(pokemonsRes?.results));
    };

    fetchPokemons();
  }, []);

  return (
    <ChakraBaseProvider theme={theme}>
      <Seach />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {pokemons.map((pokemon, index) => {
          return (
            <Card key={pokemon?.name} pokemon={pokemon} index={index}></Card>
          );
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
