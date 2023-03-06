import { ChakraBaseProvider } from "@chakra-ui/react";
import React from "react";
import Seach from "./components/Seach";
import { connect } from "react-redux";
import { theme } from "./resources/theme";
import { getPokemons } from "./utils/api";
import { setPokemons as setPokemonsActions } from "./actions/index.js";

function App({ pokemons, setPokemons }) {
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      console.log(pokemonsRes.results);
      setPokemons(pokemonsRes?.results);
    };

    fetchPokemons();
  }, []);

  return (
    <ChakraBaseProvider theme={theme}>
      <Seach />
      {pokemons.map((pokemon, index) => {
        return (
          <div key={pokemon?.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
            {pokemon?.name}
          </div>
        );
      })}
    </ChakraBaseProvider>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
