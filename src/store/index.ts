import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'
import { apiSlice } from './apiSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
