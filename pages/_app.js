import { store } from '../store/store';
import './styles.css'
// import { wrapper } from "../store/store";
import { Provider } from "react-redux";

// import RootReducer from '../store/reducers/RootReducer';

// import {
//     applyMiddleware,
//     compose,
//     legacy_createStore as createStore,
// } from "redux";
// import { logger, firstLetterToUppercase, addColorTypePokemon, deliteNotTypes } from "../store/middleware";
// import thunk from "redux-thunk";
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from "./reducers/RootReducer";



function MyApp({ Component, pageProps }) {
    // const composeAlt = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    // const composedEnhancers = composeAlt(applyMiddleware(thunk, logger, firstLetterToUppercase, addColorTypePokemon, deliteNotTypes))

    // const store = createStore(RootReducer, composedEnhancers);

    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

// export default wrapper.withRedux(MyApp);
export default MyApp