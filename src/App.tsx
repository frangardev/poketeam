import { ChakraBaseProvider, Grid } from "@chakra-ui/react";
import React from "react";
import Seach from "./components/Seach";
import Card from "./components/Card";
import { theme } from "./resources/theme";
import { getPokemons, getPokemonDetails } from "./utils/api";
import { getPokemonsWithDetails, setPokemons } from "./actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
// import { connect } from "react-redux";
import axios from "axios";

function App() {
  const pokemons = useSelector((state: any) => state.pokemons);
  // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve
  const dispatch = useDispatch<Dispatch<any>>();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons();
      response && dispatch(getPokemonsWithDetails(response.results));
    };

    fetchPokemons();
  }, [dispatch]);

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
