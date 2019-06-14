import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Main from './src/index';
import store from './src/config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryYellow: '#F49531',
  $primaryBrown: '#7A3100',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#474554',
});

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
