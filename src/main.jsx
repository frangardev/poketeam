import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonReducer } from "./reducers/Pokemons";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { logger } from "./middleware";
import "./index.css";

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

const store = createStore(pokemonReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
