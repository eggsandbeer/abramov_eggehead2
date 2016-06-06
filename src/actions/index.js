import { v4 } from 'node-uuid';
import * as api from '../api';

export const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const fetchTodos = (filter) => (dispatch) => {
  dispatch(requestTodos(filter));


  return api.fetchTodos(filter).then(response =>
    dispatch(receiveTodos(filter, response))
  )
}
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
