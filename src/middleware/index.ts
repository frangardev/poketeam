// export const logger = (store: any) => {   // store de la aplicación
//     return (next: any) => {          // next es una función que se llama cuando el middleware termina su trabajo y envía el action al reducer
//       return (action: any) => {      // action es la información que se pasa al reducer
//         console.log(action);
//         next(action); // <-- hace que el action llegue al reducer
//       } 
//     }
//   };

export const logger = (store:any) => (next:any) => (action:any)=>{
    console.log(action)
    next(action)
}
export const firstLetterToUppercase = (store:any) => (next:any) => (action:any)=>{
    const updateNamePokemon = action.payload.map((pokemon)=>{
        const nameUpperCase = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)
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
}

export const addColorTypePokemon =(store:any) => (next:any) => (action:any) =>{
    const addColor = (pokemon)=>{
        let bgColor = '#fff'
        switch (pokemon.types[0].type.name) {
            case "grass":
              bgColor="#62BC5C"
              break;
            case "fire":
              bgColor="#FF9D52"
              break;
            case "water":
              bgColor="#4C91D6"
              break;
            case "normal":
              bgColor="#919AA3"
              break;
            case "poison":
              bgColor="#AC6BC9"
              break;
            case "electric":
              bgColor="#F0D434"
              break;
            case "ground":
              bgColor="#D97843"
              break;
            case "fairy":
              bgColor="#90AADD"
              break;
            case "psychic":
              bgColor="#F9717A"
              break;
            case "rock":
              bgColor="#C8B88C"
              break;
            case "bug":
              bgColor="#91C229"
              break;
            case "fighting":
              bgColor="#CF3E69"
              break;
            case "bug":
              bgColor="#27a747"
              break;
            case "ghost":
              bgColor="#5269AD"
              break;
            case "steel":
              bgColor="#5A8FA1"
              break;
            case "ice":
              bgColor="#73D0BE"
              break;
            case "dark":
              bgColor="#5B5169"
              break;
            case "fairy":
              bgColor="#ED91E8"
              break;
            case "dragon":
              bgColor="#026DC6"
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
            color: color
        }
    })

    const newAction = {
        ...action,
        payload: newPayload
    }
    next(newAction)
}  