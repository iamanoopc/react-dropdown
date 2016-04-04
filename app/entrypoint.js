import 'babel-polyfill';
import './reset.scss';
import './global.scss';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import SlackContainer from './containers/SlackContainer';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <SlackContainer/>
  </Provider>,
  document.getElementById('content')
);
