import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import storeFactory from './js/store/store';
import App from './js/components/App';
import './sass/style.sass';

const store = storeFactory();

const wrapper = document.getElementById('root');

wrapper ? 
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    wrapper
  ) : 
  null;
