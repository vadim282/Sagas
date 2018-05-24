import React from 'react';
import ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import App from './App';
import store from './store'
import theme from './styles/material-ui-theme';
import './styles/index.css';





ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
