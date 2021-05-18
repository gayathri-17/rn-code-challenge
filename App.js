import React from 'react';
import { enableScreens } from 'react-native-screens';
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import {store, persistor} from './src/reducer/store'
import { PersistGate } from 'redux-persist/integration/react';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <Navigation />
      </PersistGate>
    </Provider>
  );
}