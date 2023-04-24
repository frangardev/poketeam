// // import { createStore, applyMiddleware } from "redux";
// // import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from "next-redux-wrapper";
// // import rootReducer from "./reducers";

// import {
//     applyMiddleware,
//     compose,
//     legacy_createStore as createStore,
// } from "redux";
// import { logger, firstLetterToUppercase, addColorTypePokemon, deliteNotTypes } from "./middleware";
// import thunk from "redux-thunk";
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from "./reducers/RootReducer";

// const composeAlt = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const composedEnhancers = composeAlt(applyMiddleware(thunk, logger, firstLetterToUppercase, addColorTypePokemon, deliteNotTypes))
// // export const store = createStore(rootReducer, composedEnhancers);


// // initial states here
// const initalState = {};

// // middleware
// // const middleware = [thunk, logger, firstLetterToUppercase, addColorTypePokemon, deliteNotTypes];

// // creating store
// export const store = createStore(
//     rootReducer,
//     initalState,

//     composeWithDevTools(composedEnhancers)
// );
// // export const store = createStore(rootReducer, composedEnhancers);

// // assigning store to next wrapper
// // const makeStore = () => store;

// export const wrapper = createWrapper(store);


import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch