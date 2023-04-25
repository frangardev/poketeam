// export const logger = (store: any) => {   // store de la aplicación
//     return (next: any) => {          // next es una función que se llama cuando el middleware termina su trabajo y envía el action al reducer
//       return (action: any) => {      // action es la información que se pasa al reducer
//         console.log(action);
//         next(action); // <-- hace que el action llegue al reducer
//       } 
//     }
//   };

// import { getTypesWithDetails } from "../actions";
// import { SET_POKEMON, SET_TYPES } from "../actions/types";
import { Dispatch, Middleware, MiddlewareAPI } from 'redux'


export const firstLetterToUppercase = (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if (action.type == 'data/setPokemons') {
    console.log('Is action: ', action);
    
    const updateNamePokemon = action?.payload?.map((pokemon:any)=>{
        const nameUpperCase = pokemon?.name?.charAt(0).toUpperCase()+pokemon.name.slice(1)
        return {
            ...pokemon,
            name: nameUpperCase 
        }
    })

    const newAction ={
        ...action,
        payload: updateNamePokemon
    }
    
    next(newAction)
  }else{
    console.log('Is NOT action: ', action);
    next(action)
  }
}

export const addColorTypePokemon = (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if(action.type == 'data/setPokemons' ) {
    const addColor = (pokemon:string)=>{
        let bgColor = '#fff'
        switch (pokemon) {
            case "grass":
              bgColor="#E3EFC9"
              break;
            case "fire":
              bgColor="#FDD1B4"
              break;
            case "water":
              bgColor="#D6F5FC"
              break;
            case "normal":
              bgColor="#ECEBEB"
              break;
            case "poison":
              bgColor="#D9B4FD"
              break;
            case "electric":
              bgColor="#FCF8D6"
              break;
            case "ground":
              bgColor="#DCD5CD"
              break;
            case "fairy":
              bgColor="#F7B3E4"
              break;
            case "psychic":
              bgColor="#F7B3F4"
              break;
            case "rock":
              bgColor="#F0DEC7"
              break;
            case "bug":
              bgColor="#DBE7DD"
              break;
            case "fighting":
              bgColor="#FCD6D6"
              break;
            case "ghost":
              bgColor="#A5A4D6"
              break;
            case "steel":
              bgColor="#C7DCDF"
              break;
            case "ice":
              bgColor="#D6EAED"
              break;
            case "dark":
              bgColor="#727C84"
              break;
            case "dragon":
              bgColor="#99D3DF"
              break;
            case 'flying':
              bgColor="#ABCDD9"
              break;
      
            default:
              break;
        }
        return bgColor
    } 

    const newPayload =action.payload.map(poke => {
      const typeColorsPoke = poke.types.map((type:any)=>{
        const color = addColor(type.type.name)
        return {
          ...type,
          color: color
        }
      })
      return {
        ...poke,
        types: typeColorsPoke
      }
    })    

    const newAction = {
        ...action,
        payload: newPayload
    }
    next(newAction)
  }else{
    next(action)
  }
}  

export const deliteNotTypes = (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if(action.type == 'data/setTypes' ) {
    const updatetypes = action?.payload?.filter(type => type.id !== 10001 && type.id !== 10002);
    
    const newAction = {
      ...action,
      payload: updatetypes
  }
    next(newAction)
  }else{
    next(action)
  }

}


export const myLoggingMiddleware = (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  // Here you have access to `action.type` and `action.payload`
  console.log('--Logging action with type', action.type)
  
  // You should always do this at the end of your middleware
  return next(action)
}
