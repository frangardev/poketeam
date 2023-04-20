import { shallowEqual, useSelector } from "react-redux";

const allTypesPokes = ( type:any )=>{
    const pokemons = useSelector((state: any) =>
        state.getIn(["data", "pokemons"], shallowEqual)
    ).toJS();

    return pokemons

}

export default allTypesPokes