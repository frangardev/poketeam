import './styles.css'
import { store } from '../redux/store';
import { Provider } from "react-redux";
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from "../src/resources/theme";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="https://i.ibb.co/vdQtj5K/pokeball.png" />
                <title>PokeTeam</title>
                <meta name="description" content="Crea y revisa las estadísticas de tu equipo Pokémon" />
                <meta name="og:title" content="Crea tu quipo Pokémon" />
                <meta name="og:description" content="Crea y revisa las estadísticas de tu equipo Pokémon" />
                <meta name="og:image" content="https://i.ibb.co/C115ctN/poketeam.png" />
                <meta property="og:type" content="website" />
            </Head>
            <Provider store={store}>

                <ChakraBaseProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraBaseProvider>
            </Provider>
        </>
    );
}

export default MyApp