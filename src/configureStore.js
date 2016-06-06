import { createStore, applyMiddleware } from 'redux';
// import redux_promise from 'redux-promise';
import redux_logger from 'redux-logger';
import todoApp from './reducers';
// import {loadState, saveState} from './localStorage';
// import throttle from 'lodash/throttle';


// const promise = (store) => (next) => (action) => {
//   if(typeof action.then === 'function'){
//     return action.then(next)
//   }
//   return next(action);
// }


const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ?
    action(store.dispatch) :
    next(action);

const configureStore = () => {
  // const presistedState = loadState();

  const middlewares = [thunk];
  // const wrapDispacthWithMiddlewares = (store, middlewares) => {
  //   middlewares.slice().reverse().forEach(middleware =>
  //     store.dispatch = middleware(store)(store.dispatch)
  //   )
  // }

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(redux_logger());
  }

  // console.log(todoApp)

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)

  );


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

  // wrapDispacthWithMiddlewares(store, middlewares)

  // return store;
}

export default configureStore;
