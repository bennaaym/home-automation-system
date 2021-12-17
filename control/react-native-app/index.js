import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import configureStore from './src/redux/store/configureStore';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(RNRedux);
