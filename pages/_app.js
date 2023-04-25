import './styles.css'
import { store } from '../redux/store';
import { Provider } from "react-redux";
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from "../src/resources/theme";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ChakraBaseProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraBaseProvider>
        </Provider>
    );
}

export default MyApp