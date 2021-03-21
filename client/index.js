import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import { Provider } from 'react-redux';
import store from './store';

const app = document.querySelector('#app');
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  app
);
