import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { userReducer } from './user/userSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  whitelist: ['token'],
  key: 'token',
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
