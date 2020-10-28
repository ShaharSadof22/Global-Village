import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './App.jsx';
import { store } from './store/store';

import './styles/global.scss';


ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);


