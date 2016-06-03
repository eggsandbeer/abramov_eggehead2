import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './App';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

export default Root;
