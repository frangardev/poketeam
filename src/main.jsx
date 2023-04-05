import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger, firstLetterToUppercase, addColorTypePokemon } from "./middleware";
import thunk from "redux-thunk";
import "./index.css";
import rootReducer from "./reducers/RootReducer";

// const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger, firstLetterToUppercase, addColorTypePokemon))


const store = createStore(rootReducer, composedEnhancers);
console.log('store: ', store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
