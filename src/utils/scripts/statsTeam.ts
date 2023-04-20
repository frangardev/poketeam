// Array con tu equipo y todos los tipos de tus pokemon
// Array con todos los tipos 
// Por cada tipo de tu equipo revisamos contra quie tipos es fuete y mandamos al estado un array con todos los tipo y si es fuerte o no alguno de tu equipo

import { shallowEqual, useSelector } from "react-redux";



// Funcion que retorna los stats de cada tipo del team
export const stastsType =(nameType, allTypes)=>{
  const stats = allTypes.map(type =>{
    if(type.name === nameType){
      return {
        name: nameType,
        esDevilA: type.damage_relations.double_damage_from,
        esFuerteContra: type.damage_relations.double_damage_to
      }
    } 
  })
  return stats.filter(item => item !== undefined)
}

// Retorna toda la informacion de nuestro equipo. 
export const teamDetails = () =>{
  const team = useSelector((state: any) =>
    state.getIn(["data", "team"], shallowEqual)
  ).toJS();
  const allTypes = useSelector((state: any) =>
   state.getIn(["data", "types"], shallowEqual)
  ).toJS();

  // Obtiene los tipos de cada tipo
    const typesTeam = team?.map(poke =>{
        return poke[0]?.types?.map(typePoke => typePoke.type.name)
    }).flat(2)

    const statsMyTeam= typesTeam.map(type => {return stastsType(type, allTypes)}).flat(2)

    // Los tipos a los que el equipo es fuerte
    const myTeamFueteContra = statsMyTeam.map(poke=>{
      return poke.esFuerteContra
    }).flat(2)

    //Los tipos a los que es devil o neutro el equipo 
    const myTeamNotIsFuerteContra = allTypes.map(type => {
      const isStrong = myTeamFueteContra.some(item => item.name === type.name)
      if(!isStrong) return type
    }).filter(item => item !== undefined)

    return {
      team: team,
      statsMyTeam: statsMyTeam,
      typesTeam: typesTeam,
      notStrongAgainst: myTeamNotIsFuerteContra,
      isStrongAgainst: myTeamFueteContra,
      allTypes: allTypes
    }
  }