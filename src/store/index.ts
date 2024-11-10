import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  PersistConfig,
  persistReducer,
} from 'redux-persist';
import SensitiveStorage from '../utils/SensitiveStorage';
import AuthReducer, {AuthState} from './Reducers/AuthReducer';

const sensitiveStorage = SensitiveStorage({
  keychainService: 'KeyChain',
  sharedPreferencesName: 'SharedPrefs',
});

const authPersistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage: sensitiveStorage,
  whitelist: ['isAuth', 'userInfo', 'token', 'hasFirstTimeLogin'],
};

const Reducers = combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer),
});

export const store = configureStore({
  reducer: Reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
