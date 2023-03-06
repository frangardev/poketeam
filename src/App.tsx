import { ChakraBaseProvider } from "@chakra-ui/react";
import React from "react";
import Seach from "./components/Seach";
import { theme } from "./resources/theme";
import { getPokemons } from "./utils/api";
import { setPokemons } from "./actions/index.js";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";

function App() {
  const pokemons = useSelector((state: TypeState) => state.pokemons);
  const dispath = useDispatch();

  // function App({ pokemons, setPokemons }) {
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      console.log(pokemonsRes.results);
      // setPokemons(pokemonsRes?.results);
      dispath(setPokemons(pokemonsRes?.results));
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

export default App;

// Con conect
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);
