import { ChakraBaseProvider } from '@chakra-ui/react'
import React from 'react'
import Seach from './components/Seach'

import { theme } from './resources/theme'
import { getPokemons } from './utils/api'

function App() {
  const [pokemons, setPokemons] = React.useState([])
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      console.log(pokemonsRes.results)
      setPokemons(pokemonsRes?.results)
    };

    fetchPokemons();
  }, [])

  console.log('pokemons: ', pokemons[0])

  return (
    <ChakraBaseProvider theme={theme}>
      {/* <h1>{pokemons[0].name}</h1> */}
      <Seach />
      {pokemons.map((pokemon, index) => {
        return (<div key={pokemon?.name}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
          {pokemon?.name}
        </div>)
      })}
    </ChakraBaseProvider>
  )
}

export default App