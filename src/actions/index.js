import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';


export const fetchFormData = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_FORMDATA_REQUEST'
  });

  return api.fetchFormData().then(
    response => {
      dispatch({
        type: 'FETCH_FORMDATA_SUCCESS',
        response
      })
    },
    error => {
      dispatch({
        type: 'FETCH_FORMDATA_FAILURE',
        message: error.message || 'Somethings fucked in the forms'
      })
    }

  )

}


export const fetchTodos = (filter) => (dispatch, getState) => {

  if(getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfTodos)
      })
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Somethings fucked'
      })
    }
  )
}

export const addTodo = (text) => (dispatch) => {
  api.addTodo(text).then(response => {

    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(response, schema.todo)
    })
  })
};

export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo)
    })
  })

export const handleInputChange = (value, key_name) => (dispatch) => {
  dispatch({
    type:'FORM_CHANGE_INPUT',
    key_name,
    value
  })
}
