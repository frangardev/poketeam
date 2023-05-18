// Si hay pokemons en el quipo obtenemos sus fortalezas y devilidades
//  Array con todos los tipos y nos dice si nuestrro equipo es fuerte o no a cada tipo. Este array esta ordenado de los tipos que son mas fuertes ante otros a los que menos
// Tomamos el tipo el primer tipo al que es devil tú equipo y buscamos un tipo que sea fuerte contra ese tipo
// Obtenemos todos los pokemon con ese tipo y sacamos uno de manera aleatoria y lo agregamos al equipo 

import { teamDetails } from "./statsTeam"


export const completeTeam = ( statsMyTeam, pokemons, updateTeam, allTypes ) =>{
    if(statsMyTeam === undefined) return 'error team'
    else{
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        }

        let newTeam = [...statsMyTeam?.team]
        
        while ( newTeam?.length < 6) { 
            let newStats={}
            if (newTeam.length >= 1 ) {
                newStats = teamDetails(newTeam, allTypes)
            }else{
                newStats = statsMyTeam
            }
            // Obtine uno de los tipos a los que es devil 
            const typeDevil = newStats?.notStrongAgainst[getRandomInt(newStats?.notStrongAgainst?.length)]?.damage_relations?.double_damage_from[0]
            //Busca los tipos fuertes contra el que somos devil
            const conterPopkes = newStats?.allTypes?.filter(item => item?.name === typeDevil?.name)
            
            //Busca aleatoriamente un pokemon del tipo que es fuerte contra el tipo que nuestro team es devil
            const newPoke = conterPopkes[0]?.pokemon[getRandomInt(conterPopkes[0]?.pokemon?.length)]
            //Nos da toda la info de ese pokemon
            const newPokeTeam = pokemons?.map(poke=>{
                if(poke.name.toLowerCase() === newPoke.pokemon.name) return poke
            }).filter(item => item !== undefined)
            //Lo agregamos al team
            newTeam.push(newPokeTeam)
        }

        //Agrega al estado los nuevos pokemons
        for (let index = 0; index < newTeam.length; index++) {
            const pokemon = newTeam[index];
            const team = statsMyTeam?.team.length > 0 ? statsMyTeam?.team : newTeam

            const isPokemonMyTeam = team.some(poke => poke[0].name === pokemon[0].name)

            if(statsMyTeam?.team.length > 0){
                if(!isPokemonMyTeam) updateTeam(pokemon)
            }else{
                if(isPokemonMyTeam) updateTeam(pokemon)
            }
        }
    
        return statsMyTeam?.team 
    }
}