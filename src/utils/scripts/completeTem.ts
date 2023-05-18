// Si hay pokemons en el quipo obtenemos sus fortalezas y devilidades
//  Array con todos los tipos y nos dice si nuestrro equipo es fuerte o no a cada tipo. Este array esta ordenado de los tipos que son mas fuertes ante otros a los que menos
// Tomamos el tipo el primer tipo al que es devil tú equipo y buscamos un tipo que sea fuerte contra ese tipo
// Obtenemos todos los pokemon con ese tipo y sacamos uno de manera aleatoria y lo agregamos al equipo 

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { teamDetails } from "./statsTeam"
import { setTeam } from "../../actions";



export const completeTeam = ( statsMyTeam, pokemons, updateTeam, allTypes ) =>{
    // const statsMyTeam = teamDetails()
    
    if(statsMyTeam === undefined) return 'error team'
    else{
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        }

        let newTeam = [...statsMyTeam?.team]
        // debugger
        while ( newTeam?.length < 6) { 
            let newStats={}
            if (newTeam.length >= 1 ) {
                newStats = teamDetails(newTeam, allTypes)
            }else{
                newStats = statsMyTeam
            }
            
            const typeDevil = newStats?.notStrongAgainst[getRandomInt(newStats?.notStrongAgainst?.length)]?.damage_relations?.double_damage_from[0]
            // console.log(getRandomInt(statsMyTeam?.notStrongAgainst.length));
            // console.log(statsMyTeam?.notStrongAgainst);
            
            const conterPopkes = newStats?.allTypes?.filter(item => item?.name === typeDevil?.name)
            
            // console.log('conterPopkes ', conterPopkes);
            // const newPoke = conterPopkes[0]?.pokemon[getRandomInt(3)]
            const newPoke = conterPopkes[0]?.pokemon[getRandomInt(conterPopkes[0]?.pokemon?.length)]

            const newPokeTeam = pokemons?.map(poke=>{
                if(poke.name.toLowerCase() === newPoke.pokemon.name) return poke
            }).filter(item => item !== undefined)

            newTeam.push(newPokeTeam)

        }

        console.log('________________');
    console.log('TEAM: ', newTeam);
    console.log('________________');
        
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