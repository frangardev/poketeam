import { shallowEqual, useSelector } from "react-redux";

const allTypesPokes = ( type:any )=>{
    const pokemons = useSelector((state:any) => state.data.pokemons, shallowEqual)
    return pokemons
}

export default allTypesPokes