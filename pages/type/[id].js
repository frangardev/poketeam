import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
// import { redirect } from 'next/navigation';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails, fetchTypesWithDetails } from '../../redux/slices/dataSlice';

import { Box, Flex, Text, Image } from '@chakra-ui/react';

import GridContainerCards from '../../src/components/GridContainerCards';
import Card from '../../src/components/Card';
import { addIcon } from '../../src/components/BgCard';
import Loader from '../../src/components/Loader';
import Navbar from '../../src/components/Navbar';

function TypesPage() {
    const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
    const loading = useSelector((state) => state.ui.loading)
    const dispatch = useDispatch()

    const router = useRouter()

    const typePokemons = router.query.id

    const [allPokemonsType, setAllPokemonsType] = useState([])
    const [imgTypePokemon, setimgTypePokemon] = React.useState();
    const [title, setTitle] = React.useState(typePokemons);

    useEffect(() => {
        if (!(pokemons.length > 0)) {
            dispatch(fetchPokemonsWithDetails());
            dispatch(fetchTypesWithDetails());
        }
    }, []);

    useEffect(() => {
        if (typePokemons) {
            if (typePokemons == 'all') setAllPokemonsType(pokemons)
            else {
                const allPokesType = pokemons.filter(poke => poke.types.some(type => type.type.name == typePokemons))
                if (allPokesType.length === 0) {
                    console.error('Error no es correcto el enlace');
                    // redirect('/');
                    router.push('/404')
                }
                setAllPokemonsType(allPokesType)
                addIcon(typePokemons, setimgTypePokemon);
                setTitle(typePokemons.charAt(0).toUpperCase() + typePokemons.slice(1))
            }
        }
    }, [typePokemons])


    return (
        <Box maxW={"1000px"} m={"0 auto 120px"}>
            <Box position={'sticky'} top={'0'} zIndex={'100'}>
                <Navbar />
            </Box>
            {typePokemons == 'all'
                ? (<Text variant={'title'} textAlign={'center'} m={'48px 0'} fontSize={{ base: "33px", md: "40px", lg: "48px" }}>Pokemons</Text>)
                : (
                    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} gap={'.5em'} mb={'48px'}>
                        <Image src={imgTypePokemon?.src} w={{ base: '48px', md: '52px', lg: "64px" }} />
                        <Text variant='title' textAlign={'center'} fontSize={{ base: "33px", md: "40px", lg: "48px" }}>{title}</Text>
                    </Flex>
                )
            }
            {!!loading ? (
                <Loader />
            ) : (
                <GridContainerCards>
                    {allPokemonsType.map((pokemon) => {
                        return <Card key={pokemon?.name} pokemon={pokemon}></Card>;
                    })}
                </GridContainerCards>
            )}
        </Box>
    )
}

export default TypesPage