import { createStore } from 'redux';
import todoApp from './reducers';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {

    if(!console.group){
      return rawDispatch;
    }

    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action','color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c prev state', 'color: green', store.getState());
    console.groupEnd(action.type);

    return returnValue;
  };
}

const configureStore = () => {
  // const presistedState = loadState();
  const store = createStore(
    todoApp
    // presistedState
  );

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  // store.subscribe(throttle(() => {
  //   saveState({
  //     todos: store.getState().todos
  //   });
  // }, 1000));

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    });
  });

  return store;
}

export default configureStore;
