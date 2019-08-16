import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../reducers';

// https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
