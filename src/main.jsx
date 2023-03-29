import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonReducer } from "./reducers/Pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "./middleware";
import thunk from "redux-thunk";
import "./index.css";

// const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))
// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const composedEnhancers = composeAlt(applyMiddleware(thunk, logger))
const composedEnhancers = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(pokemonReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
