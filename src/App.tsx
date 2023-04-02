import { ChakraBaseProvider, Grid } from "@chakra-ui/react";
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
  const pokemons = useSelector((state: any) => state.pokemons);
  const loading = useSelector((state: any) => state.loading);
  let favorite = useSelector((state: any) => state.favorite);

  // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve
  const dispatch = useDispatch<Dispatch<any>>();
  // const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      // console.log("loading1 ", loading);
      // // dispatch(setLoading(true));
      // const response = await getPokemons();
      // response && dispatch(getPokemonsWithDetails(response.results));
      // // console.log(
      // //   "getPokemonsWithDetails: ",
      // //   getPokemonsWithDetails(response.results)
      // // );
      // dispatch(setLoading(true));

      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes.results));
      dispatch(setLoading(false));
    };
    fetchPokemons();
    console.log("loading2 ", loading);
  }, [dispatch]);

  React.useEffect(() => {
    console.log("==============Favorite ", favorite);
  }, [dispatch]);

  return (
    <ChakraBaseProvider theme={theme}>
      <Seach />
      <h2>Favorite pokemon: {favorite}</h2>
      {/* <Loader /> */}
      {!!loading ? (
        <Loader />
      ) : (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {pokemons.map((pokemon) => {
            return <Card key={pokemon?.name} pokemon={pokemon}></Card>;
          })}
        </Grid>
      )}
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
