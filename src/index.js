import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const presistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back',
    completed: false
  }],
  visibilityFilter: undefined
}

const store = createStore(
  todoApp,
  presistedState
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
