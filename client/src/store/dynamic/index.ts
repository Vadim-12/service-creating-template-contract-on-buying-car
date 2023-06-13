import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { 
	persistStore,
	persistReducer,
	FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import pageSlice from './slices/pageSlice'
import carSlice from './slices/carSlice'
import cartSlice from './slices/cartSlice'

const rootReducer = combineReducers({
	curPage: pageSlice.reducer,
  cars: carSlice.reducer,
  cart: cartSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch