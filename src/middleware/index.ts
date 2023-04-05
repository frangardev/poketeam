// export const logger = (store: any) => {   // store de la aplicación
//     return (next: any) => {          // next es una función que se llama cuando el middleware termina su trabajo y envía el action al reducer
//       return (action: any) => {      // action es la información que se pasa al reducer
//         console.log(action);
//         next(action); // <-- hace que el action llegue al reducer
//       } 
//     }
//   };

import { SET_POKEMON } from "../actions/types";

export const logger = (store:any) => (next:any) => (action:any)=>{
    console.log(action)
    next(action)
}
export const firstLetterToUppercase = (store:any) => (next:any) => (action:any)=>{
  if (action.type === SET_POKEMON) {
    const updateNamePokemon = action?.payload?.map((pokemon)=>{
        const nameUpperCase = pokemon?.name?.charAt(0).toUpperCase()+pokemon.name.slice(1)
        // console.log(nameUpperCase)
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
    next(action)
  }
}

export const addColorTypePokemon =(store:any) => (next:any) => (action:any) =>{
  if(action.type === SET_POKEMON ) {
    const addColor = (pokemon)=>{
        let bgColor = '#fff'
        switch (pokemon?.types[0]?.type?.name) {
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
              bgColor="#F7B3C0"
              break;
            case "psychic":
              bgColor="#E998C1"
              break;
            case "rock":
              bgColor="#F0DEC7"
              break;
            case "bug":
              bgColor="#DBE7DD"
              break;
            case "fighting":
              bgColor="#E9989D"
              break;
            case "ghost":
              bgColor="#8D8CC4"
              break;
            case "steel":
              bgColor="#C7DCDF"
              break;
            case "ice":
              bgColor="#ABCDD9"
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
   
    const newPayload = action.payload.map((poke)=>{
        const color = addColor(poke)
        return{
            ...poke,
            color: color,
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