import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from './rootReducer';
import { createLogger } from 'redux-logger';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middleware = []; 


middleware.push(createLogger()); 

const rootReducers = combineReducers({
  user: persistReducer(persistConfig, userReducer)}
);

const enhancers = [applyMiddleware(...middleware)];
const persist = { enhancers }; 

export const store = createStore(rootReducers, compose(...enhancers));
export const persistor = persistStore(store, persist, () => {
});

