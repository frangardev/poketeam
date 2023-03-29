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