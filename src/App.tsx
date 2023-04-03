import { ChakraBaseProvider, Grid, Box } from "@chakra-ui/react";
import React from "react";
import Seach from "./components/Seach";
import Card from "./components/Card";
import { theme } from "./resources/theme";
import { getPokemons, getPokemonDetails } from "./utils/api";
import {
  getPokemonsWithDetails,
  setFavorite,
  setLoading,
  setPokemons,
} from "./actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
// import { connect } from "react-redux";
import axios from "axios";
import Loader from "./components/Loader";

function App() {
  const pokemons = useSelector((state: any) => state.get("pokemons")).toJS();
  const loading = useSelector((state: any) => state.get("loading"));
  let favorite = useSelector((state: any) => state.get("favorite"));

  // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve
  const dispatch = useDispatch<Dispatch<any>>();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes.results));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, [dispatch]);

  return (
    <ChakraBaseProvider theme={theme}>
      <Box maxW={"1000px"} m={"0 auto"}>
        <Seach />
        <h2>Favorite pokemon: {favorite}</h2>
        {/* <Loader /> */}
        {!!loading ? (
          <Loader />
        ) : (
          <Grid templateColumns="repeat(auto-fill, minmax(19em, 1fr))" gap={6}>
            {pokemons.map((pokemon) => {
              return <Card key={pokemon?.name} pokemon={pokemon}></Card>;
            })}
          </Grid>
        )}
      </Box>
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
