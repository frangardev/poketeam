import axios from 'axios'
const imagesAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png'
const imagesAPI2 = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/905.svg'

export const getPokemons = async () => {
	try {
		const { data } = await axios.get(
			// 'https://pokeapi.co/api/v2/pokemon?limit=905'
			'https://pokeapi.co/api/v2/pokemon?limit=150'
			// 'https://pokeapi.co/api/v2/pokemon?limit=1281'
		)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const getPokemonDetails = async (urlPokemon:any) => {
	try {
		const { data } = await axios.get(urlPokemon)
		return data
	} catch (error) {
		console.error(error)
	}
}
export const getTypes = async () => {
	try {
		const { data } = await axios.get(
			'https://pokeapi.co/api/v2/type/'
		)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const getTypesDetails = async (urlType:string) => {
	try {
		const { data } = await axios.get(urlType)
		console.log('---GET Type data: ',data.name)
		return data
	} catch (error) {
		console.log('---GET Error----to ', urlType)
		console.error(error)
	}
}