import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";
import { myLoggingMiddleware, deliteNotTypes, addColorTypePokemon, firstLetterToUppercase } from '../middleware';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        ui: uiReducer
    }, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(myLoggingMiddleware, addColorTypePokemon, deliteNotTypes, firstLetterToUppercase),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
