import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import creatures from './constants/creatures';
import App from './components/App'

ReactDOM.render(
  <App
    creatures={creatures}
  />,
  document.getElementById('app')
);
