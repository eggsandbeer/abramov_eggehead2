import { createStore } from 'redux';
import todoApp from './reducers';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

const logger = (store) => (next) => {
  if(!console.group){
    return next;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action','color: blue', action);
    const returnValue = next(action);
    console.log('%c prev state', 'color: green', store.getState());
    console.groupEnd(action.type);

    return returnValue;
  }
}

const promise = (store) => (next) => (action) => {
  if(typeof action.then === 'function'){
    return action.then(next)
  }
  return next(action);
}

const configureStore = () => {
  // const presistedState = loadState();
  const store = createStore(
    todoApp
    // presistedState
  );
  const middlewares = [promise];
  const wrapDispacthWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware =>
      store.dispatch = middleware(store)(store.dispatch)
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }


  // store.subscribe(throttle(() => {
  //   saveState({
  //     todos: store.getState().todos
  //   });
  // }, 1000));

  // store.subscribe(() => {
  //   saveState({
  //     todos: store.getState().todos
  //   });
  // });

  wrapDispacthWithMiddlewares(store, middlewares)

  return store;
}

export default configureStore;
