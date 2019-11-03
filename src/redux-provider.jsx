import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './createReduxStore';

const store = createStore();
const rootElement = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <AppRootComponent />
  </Provider>
), rootElement);