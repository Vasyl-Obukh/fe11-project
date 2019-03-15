import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './js/components/App';
import storeFactory from './js/store/store';

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
