import { ChakraBaseProvider, Grid, Box, Heading } from "@chakra-ui/react";
import React from "react";
import Seach from "./components/Seach";
import Card from "./components/Card";
import { theme } from "./resources/theme";
import {
  getPokemons,
  getPokemonDetails,
  getTypes,
  getTypesDetails,
} from "./utils/api";
import {
  getPokemonsWithDetails,
  setFavorite,
  setLoading,
  setPokemons,
  setTypes,
} from "./actions/index.js";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
// import { connect } from "react-redux";
import axios from "axios";
import Loader from "./components/Loader";
import TeamContainer from "./components/TeamContainer";
import MiniCardType from "./components/MiniCardType";

function App() {
  const pokemons = useSelector((state: any) =>
    state.getIn(["data", "pokemons"], shallowEqual)
  ).toJS();
  const types = useSelector((state: any) =>
    state.getIn(["data", "types"], shallowEqual)
  ).toJS();
  const favorite = useSelector((state: any) =>
    state.getIn(["data", "favorite"])
  );
  const team = useSelector((state: any) => state.getIn(["data", "team"]));
  const loading = useSelector((state: any) => state.getIn(["ui", "loading"]));

  // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve
  const dispatch = useDispatch<Dispatch<any>>();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes.results));
      dispatch(setLoading(false));
    };
    const fetchTypes = async () => {
      const typesRes = await getTypes();
      // debugger;
      dispatch(setTypes(typesRes.results));
    };
    fetchPokemons();
    fetchTypes();
  }, [dispatch]);

  return (
    <ChakraBaseProvider theme={theme}>
      <Box maxW={"1000px"} m={"0 auto"}>
        <Heading as="h1" textAlign={"center"} m={"5vh auto 43px"} size="4xl">
          POKE TEAM
        </Heading>
        <Seach />
        <TeamContainer />
        <Grid
          templateColumns="repeat(auto-fill, minmax(150px, 2fr))"
          rowGap={"14px"}
          columnGap={"21px"}
          mb={"88px"}
        >
          {types.map((type) => {
            return <MiniCardType type={type.name} key={type.name} />;
          })}
        </Grid>
        <h3>Favorite pokemon: {favorite}</h3>
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
