import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import TodoApp from './TodoApp';
import BigTimeApp from './BigTimeApp';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="todo(/:filter)" component={TodoApp} />
        <Route path="bigtime" component={BigTimeApp} />
      </Route>

    </Router>
  </Provider>
)

export default Root;
