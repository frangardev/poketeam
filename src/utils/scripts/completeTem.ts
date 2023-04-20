// Si hay pokemons en el quipo obtenemos sus fortalezas y devilidades
//  Array con todos los tipos y nos dice si nuestrro equipo es fuerte o no a cada tipo. Este array esta ordenado de los tipos que son mas fuertes ante otros a los que menos
// Tomamos el tipo el primer tipo al que es devil tú equipo y buscamos un tipo que sea fuerte contra ese tipo
// Obtenemos todos los pokemon con ese tipo y sacamos uno de manera aleatoria y lo agregamos al equipo 

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { teamDetails } from "./statsTeam"
import { setTeam } from "../../actions";


export const completeTeam = ( statsMyTeam, pokemons, updateTeam ) =>{
    // const statsMyTeam = teamDetails()
    
    if(statsMyTeam === undefined) return 'error team'
    else{

        const newTeam = statsMyTeam?.team 

        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        }

        // debugger
        // while ( newTeam?.length < 5 ) {    
        while ( statsMyTeam?.team.length < 6 ) {    
            const typeDevil = statsMyTeam?.notStrongAgainst[getRandomInt(statsMyTeam?.notStrongAgainst.length)]?.damage_relations?.double_damage_from[0]
            // console.log(getRandomInt(statsMyTeam?.notStrongAgainst.length));
            // console.log(statsMyTeam?.notStrongAgainst);
            
            const conterPopkes = statsMyTeam?.allTypes?.filter(item => item?.name === typeDevil?.name)
            
            // console.log('conterPopkes ', conterPopkes);
            const newPoke = conterPopkes[0]?.pokemon[getRandomInt(3)]
            // const newPoke = conterPopkes[0]?.pokemon[getRandomInt(conterPopkes[0]?.pokemon?.length)]

            // const newPokeTeam = pokemons.filter(item => item?.name == newPoke?.pokemon?.name)
            const newPokeTeam = pokemons?.map(poke=>{
                if(poke.name.toLowerCase() === newPoke.pokemon.name) return poke
            }).filter(item => item !== undefined)
            // console.log(newPokeTeam);
            
            // console.log(newPoke.pokemon.name);
            // console.log('--newPoke: ', pokemons[getRandomInt(149)].name);

            newTeam.push(newPokeTeam)
            // debugger
            console.log('--newPoke: ', newPokeTeam);
            if(newPokeTeam) updateTeam(newPokeTeam)
        }
        // for (let index = 0; index < newTeam.length; index++) {
        //     const typeDevil = statsMyTeam?.notStrongAgainst[0]?.damage_relations?.double_damage_from[index];
        //     const conterPopkes = statsMyTeam?.allTypes?.filter(item => item?.name === typeDevil?.name)
        //     const newPoke = conterPopkes[0]?.pokemon[0]

        //     // const newPokeTeam = pokemons?.map(poke=>{
        //     //     if(poke?.name?.toLowerCase() === newPoke?.pokemon?.name) return poke
        //     // }).filter(item => item !== undefined)

        //     newTeam.push(newPoke)
        // }
    
        return statsMyTeam?.team 
        
    }
}